import { Component } from 'react';
import StatusScreen from '../StatusScreen/StatusScreen.jsx';

/** Catches render errors so a single bad component cannot blank the whole page. */
export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <StatusScreen
        title="Something went wrong"
        message="The dashboard hit an unexpected error."
        actionLabel="Reload page"
        onAction={() => window.location.reload()}
      />
    );
  }
}
