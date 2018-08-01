import { Button } from '@blueprintjs/core';

export default ({ className, onClick, children }) => (
	<Button className={className} onClick={onClick}>
		{children}
		<style jsx global>{`
			.pt-button {
				background: rgba(71, 98, 255, 1) !important;
				border: none !important;
				border-radius: 5px;
				box-shadow: none !important;
				color: #fff !important;
				cursor: pointer;
				display: block;
				font-family: 'Titillium Web';
				font-weight: normal !important;
				font-size: 14px;
				line-height: 16px;
				padding: 8px 15px 8px 15px;
				transition: color 0.1s ease-in-out, background 0.2s ease-in-out,
					border 0.1s ease-in-out, box-shadow 0.1s ease-in-out,
					transform 0.1s ease-in-out !important;
			}

			.pt-button:hover {
				transform: translate(0px, -0.5px);
			}

			.pt-button:focus {
				outline: none;
			}

			.pt-button:active {
				color: rgba(210, 217, 255, 1) !important;
				background: rgba(71, 98, 255, 0.9) !important;
				box-shadow: 0px 2px 1px -1px rgba(71, 98, 255, 0.4);
				transform: translate(0px, 1px);
			}
		`}</style>
	</Button>
);
