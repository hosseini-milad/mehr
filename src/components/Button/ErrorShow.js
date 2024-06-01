function ErrorShow(props) {
    const errorMessage = props.message;
    const errorColor = props.color;
  
    return (
      <>
        {errorMessage ? (
          <small
            className="errorHandler"
            style={{ color: errorColor }}
            dangerouslySetInnerHTML={{ __html: errorMessage }} // Safely render HTML content
          />
        ) : (
          <></>
        )}
      </>
    );
  }
  
  export default ErrorShow;