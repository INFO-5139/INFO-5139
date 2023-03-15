import { useSelector, useDispatch } from 'react-redux';
import { ThemeButton } from './theme-toggle.styles';
import { switchTheme } from '../../redux/theme/themeSlice';
import { HiSun } from 'react-icons/hi';
import { HiMoon } from 'react-icons/hi';

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme.currentTheme);
  const themeColors = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const themeButton = theme;

  const onThemeChangeHandler = () => {
    dispatch(switchTheme(theme === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeButton
      onClick={onThemeChangeHandler}
      colors={themeColors}
    >
      {themeButton === 'dark' ? <HiSun /> : <HiMoon />}
    </ThemeButton>
  );
};

export default ThemeToggle;
