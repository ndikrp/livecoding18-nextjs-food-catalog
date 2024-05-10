import Link from 'next/link';
import Image from 'next/image';

import classes from './user-item.module.css';

export default function UserItem({ name, price, image, summary, creator }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={name} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{name}</h2>
          <p>price : Rp {price}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${price}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
