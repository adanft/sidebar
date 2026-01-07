function Home() {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl text-primary-color my-2">React Components</h1>
      <p>
        This project presents the architecture and design of the main components in most
        administrative dashboards. At the moment, it only includes some of them, but more components
        may be added in the future.
      </p>
      <h2 className="font-semibold text-xl text-primary-color my-2">Sidebar</h2>
      <p>
        A sleek, fully customizable navigation drawer designed for modern web interfaces. It offers
        accessibility support and adaptive responsiveness to ensure a consistent user experience
        across all devices.
      </p>
      <h2 className="font-semibold text-xl text-primary-color my-2">Navbar</h2>
      <p>
        Not a fully responsive React navbar component but featuring a global search bar, integrated
        dark mode toggle, notification system, and user profile management.
      </p>
      <h2 className="font-semibold text-xl text-primary-color my-2">Profile</h2>
      <p>
        A user profile dropdown displaying the current user's avatar, display name, and a quick
        logout action.
      </p>
      <h2 className="font-semibold text-xl text-primary-color my-2">Not Found</h2>
      <p>
        A friendly 404 error page designed to guide users back to the homepage when they encounter a
        broken link or non-existent route.
      </p>
    </div>
  );
}

export default Home;
