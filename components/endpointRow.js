export default ({ title, isActive, onClick }) => {
  return (
    <div className="endpoint" onClick={onClick}>
      Title
      <style>
        {`
          .endpoint {
            padding: 0px 10px;
          }
        `}
      </style>
    </div>

  );
} 