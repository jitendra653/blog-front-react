import React, { ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ errorInfo });
    this.sendTelegramAlert(error, errorInfo);
  }

  sendTelegramAlert(error: Error, errorInfo: React.ErrorInfo) {
    const token = '7446441089:AAFhNfftQ5my45OzpUd5h3eYUXIcv4lqe3g';
    const chatId = '-1002216050928';
    const title = "🚨 Application Error Alert";
    const message = `${title}\n\n\n*Url:* ${window.location.href}\n\n*Error:* ${error.message}\n\n*Stack:* ${errorInfo.componentStack}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const data = {
      chat_id: chatId,
      text: message,
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).catch(err => console.error('Telegram API error:', err));
  }

  handleRedirect = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Something went wrong.</h1>
          <p className="text-lg text-gray-700 mb-2">An error occurred while rendering this component.</p>
          {/* {this.state.error && <p className="text-sm text-gray-500">Error: {this.state.error.message}</p>}
          {this.state.errorInfo && <p className="text-sm text-gray-500">{this.state.errorInfo.componentStack}</p>} */}
          <button
            onClick={this.handleRedirect}
            className="block py-2 px-4 rounded mt-6 bg-purple-700 hover:bg-purple-600  md:hover:bg-transparent md:border md:border-purple-700 md:text-white md:hover:text-purple-600"
          >
            Go to Home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;