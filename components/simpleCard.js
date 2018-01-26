export default ({ title, isActive, children }) => {
  return (
    <div className="simple-card">
      { children }
      <style>
        {`
          .simple-card {
            padding: 0px 10px;
            background-color: white;
            box-shadow: 0 2px 5px 0 rgba(51,51,79,0.07);
            border-radius: 6px;
            height: 100%;
          }
        `}
      </style>
    </div>

  );
} 