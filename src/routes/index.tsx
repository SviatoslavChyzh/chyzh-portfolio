import { createRoute } from '@tanstack/react-router';
import App from '@/App';
import { rootRoute } from '@/routes/root';

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index() {
    return <App />;
  },
});
