const ErrorHandling = WrappedComponent => ({ showError, children }) => {
    return (
        <WrappedComponent>
            {showError && <div className="error-message">Oops! Something went wrong!</div>}
            {children}
        </WrappedComponent>
    );
};