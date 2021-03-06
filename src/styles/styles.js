import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  color: var(--light-color);
  background-color: var(--primary-color);
  padding-block: min(3vh, 10rem);
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem;
  font-size: 1.3rem;
`;

export const SearchFormInput = styled.input`
  min-width: 20vw;
  border: 0;
  outline: none;
  border-radius: 25px;
  padding: 0.5rem;
  font-size: 14px;
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  border: 0;
  background-color: unset;
  cursor: pointer;
`;

export const FilterContainer = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 2rem;
`;

export const FilterSelector = styled.select`
  min-width: 30vw;
  padding: 0.6rem;
  border: 1px solid var(--grayish-color);
  outline: none;
  font-size: 1rem;
  color: gray;
  margin-left: 1rem
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-block: min(5vh, 10rem);
  justify-content: center;
`;

export const RecipeWrapper = styled.div`
  background-color: var(--light-color);
  margin: 1rem;
  padding: 0.5rem;
  box-shadow: 10px 10px 29px -19px rgba(0,0,0,0.75);
  border-radius: 8px;
  position: relative;
`;

export const MoreDetailsButton = styled.button`
  display: block;
  position: absolute;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  border: 0;
  border-radius: 3px;
  right: 1rem;
  bottom: 1rem;
`;

export const MealsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const MealsImage = styled.img`
  max-width: 25vh;
  border-radius: 50%;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: 'center';
  margin-top: 10rem;
`;
