import { Button } from './Button';

import '../styles/global.scss';
import '../styles/sidebar.scss';

interface SideBarProps {
  genres: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }[],
  selectedGenreId: number,
  setSelectedGenreId: React.Dispatch<React.SetStateAction<number>>
}


export function SideBar(props:SideBarProps) {
  // Complete aqui
  function handleClickButton(id: number) {
    props.setSelectedGenreId(id);
  }
  

  return(
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {props.genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={props.selectedGenreId === genre.id}
        />
      ))}
    </div>

  </nav>
  )

}