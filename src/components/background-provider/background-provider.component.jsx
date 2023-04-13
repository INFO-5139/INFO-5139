import { useSelector } from 'react-redux';

const BackgroundProvider = ({ children }) => {
  const theme = useSelector((state) => state.theme.currentTheme);
  return <div className={[theme]}>{children}</div>;
};

export default BackgroundProvider;
