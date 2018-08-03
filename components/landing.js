
export const Feature = ({ title, url, description }) => {
  return (
    <div className="feature-container center-xs">
      <div className="features_icon" />
      <div className="title"> {title} </div>
      <div className="features_description">
        {description}
      </div>
      <style jsx> {
        `
          .features_icon {
            background-image: url('${url}');
            background-size: cover;
            width: 130px;
            height: 60px;
            margin: auto;
          }

          .feature-container {
            padding: 2.5em 0em;
          }

          .title {
            font-size: 18px;
            font-weight: 300;
            margin: 1em 0em;
          }

          .features_description {
            color: rgb(73, 85, 95);
            font-size: 15px;
            text-align: center;
            max-width: 275px;
            margin: auto;
            margin-top: 1em;
            line-height: 25px;
          }
        `
      }
      </style>
    </div>
  )
};