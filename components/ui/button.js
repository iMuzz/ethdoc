import { Button } from '@blueprintjs/core';

export default ({ className, onClick, children }) => (
	<Button className={className} onClick={onClick}>
		{children}
		<style jsx global>{`
			.pt-button {
				background: rgba(71, 98, 255, 1) !important;
				box-shadow: 0px 2px 10px -1px rgba(71, 98, 255, 0.36)!important;
				border-radius: 6px !important;
				color: #fff !important;
				cursor: pointer;
				display: block;
				font-family: 'Titillium Web';
				font-weight: 300 !important;
				font-size: 13px !important;
				padding: 7px 15px 6px 14px !important;
				text-transform: uppercase;
				line-height: 20px !important;
				transition: color 0.2s ease-in-out, background 0.2s ease-in-out,
					border 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
					transform 0.2s ease-in-out !important;
				user-select: none;
			}

			.pt-button.no-shadow {
				box-shadow: none !important;
			}

			.pt-button:hover.no-shadow {
				box-shadow: none !important;
			}

			.pt-button:hover {
				transform: translate(0px, -1.5px);
				box-shadow: 0px 2px 16px -1px rgba(71, 98, 255, 0.42)!important;
			}

			.pt-button:focus {
				outline: none;
			}

			.pt-button:active {
				color: rgba(210, 217, 255, 1) !important;
				background: rgba(71, 98, 255, 0.9) !important;
				box-shadow: 0px 2px 10px -1px rgba(71, 98, 255, 0)!important;
				transform: translate(0px, 1px);
			}
		`}</style>
	</Button>
);
