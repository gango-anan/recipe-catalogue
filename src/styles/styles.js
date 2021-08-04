import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  color: var(--light-color);
  background-color: var(--primary-color);
  padding-block: min(3vh, 10rem);
`

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem;
  font-size: 1.3rem;
`

export const LogoLink = styled.span`
  color: var(--light-color);
`

export const FilterSelector = styled.select`
  min-width: 20vw;
  padding: 0.5rem;
  border: 0;
  outline: none;
  font-size: 14px;
  margin-left: 1rem
`

export const SearchForm = styled.form`
  position: relative;
`

export const SearchFormInput = styled.input`
  min-width: 20vw;
  border: 2px solid #f0f0f0;
  outline: none;
  border-radius: 25px;

  padding: 0.5rem;
  font-size: 14px;
`

export const SearchButton = styled.button`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  border: 0;
  background-color: unset;
  cursor: pointer;
`
