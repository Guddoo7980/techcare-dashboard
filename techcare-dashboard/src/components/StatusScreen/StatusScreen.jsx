import './StatusScreen.css';

/** Full-page loading / error message. */
export default function StatusScreen({ title, message, actionLabel, onAction, busy = false }) {
  return (
    <div className="status-screen" role={busy ? 'status' : 'alert'}>
      {busy && <span className="status-screen__spinner" aria-hidden="true" />}
      <h1 className="status-screen__title">{title}</h1>
      {message && <p className="status-screen__message">{message}</p>}
      {actionLabel && (
        <button type="button" className="status-screen__action" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}
