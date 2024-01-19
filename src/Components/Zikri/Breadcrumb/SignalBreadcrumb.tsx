import { Link } from 'react-router-dom';
import styles from './style.module.css';

const SignalBreadcrumb = ( items:any ) => {
  const MAX_DISPLAY_ITEMS = 1;

  const generateBreadcrumb = () => {
    if (items.length <= 4) {
      return (
        <ul className="flex text-xl">
          {items.map((item:any , index:any) => (
            <li className={styles['contain']} key={index}>
              <Link to={item.href} className="text-xl text-black">{item.name}</Link>
            </li>
          ))}
          
        </ul>
      );
    } else {
      const displayedItems = items.slice(0, MAX_DISPLAY_ITEMS);

      return (
        <ul className="flex text-xl">
          {displayedItems.map((item:any, index:any) => (
            <li className={styles['contain']} key={index}>
              <Link to={item.href} className="text-xl text-black">{item.name}</Link>
            </li>
          ))}
          {items.length > 4 && (
            <li className={styles['contain']}>
              <span className={`${styles['dropdown-trigger']} text-xl text-black`}>
                <div>
                  <p>...</p>
                  <div className={styles['dropdown']}>
                    <ul>
                      {items.slice(MAX_DISPLAY_ITEMS, -2).map((item:any, index:any) => (
                        <li key={index}>
                          <Link to={item.href} className="text-xl text-black">{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </span>
            </li>
          )}
          <li className={styles['contain']}>
            <Link to={items[items.length - 2].href} className="text-xl text-black">{items[items.length - 2].name}</Link>
          </li>
          <li>
            <Link to={items[items.length - 1].href} className="text-xl text-black">{items[items.length - 1].name}</Link>
          </li>
        </ul>
      );
    }
  };

  return (
    <nav>
      {generateBreadcrumb()}
    </nav>
  );
};

export default SignalBreadcrumb;
