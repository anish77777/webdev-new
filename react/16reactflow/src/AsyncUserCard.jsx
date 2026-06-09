import { use } from 'react';

function AsyncUserCard({ userDataPromise }) {
  // Consuming the promise using React 19's new `use` hook.
  // This suspends the component while the promise is pending,
  // and throws an error caught by ErrorBoundary if the promise rejects.
  const user = use(userDataPromise);

  return (
    <div className="user-profile-card">
      <div className="user-avatar-wrapper">
        <img src={user.avatar} alt={user.name} className="user-avatar" />
        <span className="status-badge online">Active</span>
      </div>
      <div className="user-info">
        <h3 className="user-name">{user.name}</h3>
        <p className="user-role">{user.role}</p>
        <p className="user-email">{user.email}</p>
        <div className="user-details">
          <div className="detail-item">
            <span className="detail-label">Location</span>
            <span className="detail-val">{user.location}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Joined</span>
            <span className="detail-val">{user.joined}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsyncUserCard;
