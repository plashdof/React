import { Link } from 'react-router-dom'
import { useContext } from 'react';

import classes from './MainNav.module.css';

import FavoritesContext from '../../store/favorites-context';

function MainNav(){
    const favoritesCtx = useContext(FavoritesContext);

    return<header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>

            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>

                <li>
                    <Link to='/new-meet-up'>Add New Meetups</Link>
                </li>

                <li>
                    <Link to='/favorites'>My Favorites
                    <span classname='badge'>{favoritesCtx.totalFavorites}</span>
                    </Link>
                </li>
            </ul>
        </nav>

    </header>
}

export default MainNav;