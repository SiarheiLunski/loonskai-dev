import { PropsWithChildren, ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Meta } from './meta';
import { Header } from './header';
import { Footer } from './footer';
import { ThemeToggler } from './ui/theme-toggler';
import { THEME } from '../shared/themes';

const Wrapper = styled.div(({ theme }) => css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${theme.text.primary};
  background: ${theme.background.primary};
  transition: all ease 0.3s;
`);

type Props = {
  activeTheme: THEME
  toggleTheme(string): void
} & PropsWithChildren<ReactNode>

export const Layout = ({ children, activeTheme, toggleTheme }: Props): JSX.Element => {
  return (
    <>
      <Meta/>
      <Wrapper>
        <Header>
          <ThemeToggler activeTheme={activeTheme} toggleTheme={toggleTheme} />
        </Header>
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </>
  );
};
