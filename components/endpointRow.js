import classNames from 'classnames';

export default ({ title, isActive, onClick }) => {
	return (
		<div
			className={classNames('endpoint', { active: isActive })}
			onClick={onClick}>
			{title}
			<style>
				{`
          a:hover {
            text-decoration: none;
          }

          .endpoint {
            color: #182026;
            padding: 4px 20px;
            cursor: pointer;
            color: #182026;
            border-radius: 3px;
            margin: 3px 0px;
            transition: background-color .3s;
          }

          .endpoint:hover {
            background-color: #e2e2ff;
          }

          .endpoint.active {
            color: #6078FF;
            font-weight: 600;
          }
        `}
			</style>
		</div>
	);
};
