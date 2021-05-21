import { Component } from "react";
import Hero from "./Hero";

class ErrorBoundary extends Component {
  constructor(props: string | object) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    // @ts-ignore
    if (this.state.hasError) {
      return (
        <Hero
          intro="Unfortunately, the site is"
          title="Undergoing maintenance."
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
