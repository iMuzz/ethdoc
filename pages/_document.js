import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const { html, head, errorHtml, chunks } = renderPage();
		const styles = flush();
		return { html, head, errorHtml, chunks, styles };
	}

	render() {
		return (
			<html>
				<Head>
					<style>{`body { margin: 0; background-color: #f5f5fc; } /* custom! */`}</style>
					<link
						href="https://unpkg.com/@blueprintjs/core@^1.11.0/dist/blueprint.css"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300,400,700"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css"
						type="text/css"
					/>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
						type="text/css"
					/>
					<link
						href="https://unpkg.com/@blueprintjs/core@^1.11.0/dist/blueprint.css"
						rel="stylesheet"
					/>
					<script src="https://embed.runkit.com" />
				</Head>
				<body>
					{this.props.customValue}
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
