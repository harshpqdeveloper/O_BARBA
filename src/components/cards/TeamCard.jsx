import Photo from '../ui/Photo';
import { Crown } from '../ui/Logo';

/** Team profile card. Shows an elegant placeholder until a real photo is set in src/data/team.js. */
export default function TeamCard({ name, role, bio, photo }) {
  return (
    <article className="team-card">
      <div className="team-card__media">
        {photo ? (
          <Photo image={{ position: 'center top', ...photo }} />
        ) : (
          <div className="team-card__placeholder" role="img" aria-label="Photo coming soon">
            <Crown />
            <span>Photo coming soon</span>
          </div>
        )}
      </div>
      <div className="team-card__body">
        <p className="team-card__role">{role}</p>
        <h3 className="team-card__name">{name}</h3>
        <p className="team-card__bio">{bio}</p>
      </div>
    </article>
  );
}
