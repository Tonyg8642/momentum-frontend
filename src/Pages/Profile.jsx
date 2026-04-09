import { Link } from "react-router-dom";

function Profile({ currentUser, onLogout }) {
  if (!currentUser) {
    return (
      <main className="profile">
        <p className="profile__guest">
          You are not signed in.{" "}
          <Link to="/" className="profile__link">
            Go back home
          </Link>
        </p>
      </main>
    );
  }

  const initials = currentUser.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <main className="profile">
      <div className="profile__card">
        <div className="profile__avatar">{initials}</div>
        <h1 className="profile__name">{currentUser.name}</h1>
        <p className="profile__email">{currentUser.email}</p>
        <button className="profile__signout" onClick={onLogout}>
          Sign Out
        </button>
      </div>
    </main>
  );
}

export default Profile;
