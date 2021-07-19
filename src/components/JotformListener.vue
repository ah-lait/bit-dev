<template>
	<div v-html="jotFormsScript" />
</template>

<script>
export default {
	name: "JotformListener",
	props: {
		jotFormsScript: {
			type: String,
			required: true,
		},
		id: {
			type: String,
			required: true,
		},
	},
	methods: {
		handleIFrameMessage(e) {
			let isJotform = e.origin.indexOf("jotform") > -1 ? true : false;
			if (isJotform) {
				if (e.data.action === "submission-completed") {
					console.log("Submission was completed");
					this.$emit("jotform-submission");
				}
			}
			let iframe;
			if (typeof e.data === "object") {
				return;
			}
			let args = e.data.split(":");
			if (args.length > 2) {
				iframe = document.getElementById(
					"JotFormIFrame-" + args[args.length - 1]
				);
			} else {
				iframe = document.getElementById("JotFormIFrame");
			}
			if (!iframe) {
				return;
			}
			switch (args[0]) {
				case "scrollIntoView":
					iframe.scrollIntoView();
					break;
				case "setHeight":
					iframe.style.height = args[1] + "px";
					break;
				case "collapseErrorPage":
					if (iframe.clientHeight > window.innerHeight) {
						iframe.style.height = window.innerHeight + "px";
					}
					break;
				case "reloadPage":
					window.location.reload();
					break;
				case "loadScript":
					if (!window.isPermitted(e.origin, ["jotform.com", "jotform.pro"])) {
						break;
					}
					// eslint-disable-next-line no-case-declarations
					let src = args[1];
					if (args.length > 3) {
						src = args[1] + ":" + args[2];
					}
					// eslint-disable-next-line no-case-declarations
					let script = document.createElement("script");
					script.src = src;
					script.type = "text/javascript";
					document.body.appendChild(script);
					break;
				case "exitFullscreen":
					if (window.document.exitFullscreen) window.document.exitFullscreen();
					else if (window.document.mozCancelFullScreen)
						window.document.mozCancelFullScreen();
					else if (window.document.mozCancelFullscreen)
						window.document.mozCancelFullScreen();
					else if (window.document.webkitExitFullscreen)
						window.document.webkitExitFullscreen();
					else if (window.document.msExitFullscreen)
						window.document.msExitFullscreen();
					break;
			}
			let isJotForm = e.origin.indexOf("jotform") > -1 ? true : false;
			if (isJotForm && iframe && iframe.contentWindow) {
				let urls = {
					docurl: encodeURIComponent(document.URL),
					referrer: encodeURIComponent(document.referrer),
				};
				iframe.contentWindow.postMessage(
					JSON.stringify({ type: "urls", value: urls }),
					"*"
				);
				iframe.contentWindow.postMessage(
					JSON.stringify({ type: "urls", value: urls }),
					"*"
				);
			}
		},
		getIframeMessage() {
			let ifr = document.getElementById(this.id);
			if (ifr) {
				let src = ifr.src;
				let iframeParams = [];
				if (window.location.href && window.location.href.indexOf("?") > -1) {
					iframeParams = iframeParams.concat(
						window.location.href
							.substr(window.location.href.indexOf("?") + 1)
							.split("&")
					);
				}
				if (src && src.indexOf("?") > -1) {
					iframeParams = iframeParams.concat(
						src.substr(src.indexOf("?") + 1).split("&")
					);
					src = src.substr(0, src.indexOf("?"));
				}
				iframeParams.push("isIframeEmbed=1");
				ifr.src = src + "?" + iframeParams.join("&");
			}
			window.isPermitted = function (originUrl, whitelisted_domains) {
				let url = document.createElement("a");
				url.href = originUrl;
				let hostname = url.hostname;
				let result = false;
				if (typeof hostname !== "undefined") {
					whitelisted_domains.forEach(function (element) {
						if (
							hostname.slice(-1 * element.length - 1) === ".".concat(element) ||
							hostname === element
						) {
							result = true;
						}
					});
					return result;
				}
			};
			if (window.addEventListener) {
				window.addEventListener("message", this.handleIFrameMessage, false);
			} else if (window.attachEvent) {
				window.attachEvent("submission-completed", this.handleIFrameMessage);
			}
		},
	},
	mounted() {
		this.getIframeMessage();
	},
};
</script>
<style lang="scss">
</style>