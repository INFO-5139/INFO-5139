import { useSelector, useDispatch } from 'react-redux';
import { ThemeButton } from './theme-toggle.styles';
import { switchTheme } from '../../redux/theme/themeSlice';

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const themeColors = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const onThemeChangeHandler = () => {
    dispatch(switchTheme(theme === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeButton
      onClick={onThemeChangeHandler}
      colors={themeColors}
    >
      {theme}
    </ThemeButton>
  );
};

export default ThemeToggle;