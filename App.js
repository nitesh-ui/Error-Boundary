import ErrorBoundary from './ErrorBoundary';

<div className="App">
  <ErrorBoundary>
    <Hero heroName="Batman"/>
  </ErrorBoundary>
  <ErrorBoundary>
    <Hero heroName="Superman"/>
  </ErrorBoundary>
  <ErrorBoundary>
    <Hero heroName="Joker"/>
  </ErrorBoundary>
</div>
