import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr;
  height: 100%;
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
    p {
      margin-bottom: 1rem;
    }
`

export const SideMenu = styled.div`
  background-color: var(--left-menu-bg);
  height: 100%;
  padding: 2rem 1rem;
  border-top: 4px solid var(--border-bg);

  .avatar-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;
  }
  .avatar {
    display: flex;
    flex-direction: row;

    img {
      border-radius: 50%;
      width: 4rem;
      height: 4rem;
    }

    span {
      display: flex;
      width: 100%;
      height: 100%;
      line-height: 4rem;
      padding: 0 0 0 1rem;
      color: white;
      font-size: 1.5rem;
    }

    margin: 0 0 1rem 0;

    
  }
  
  .follow-me{
    margin: auto;
    a {
      color: white;
      margin: 0 2px;
      text-decoration: none; /* no underline */
    }
    a:hover {
      text-decoration: none; /* no underline */
    }

  }

  .other{
    margin: 1rem 0;

    display: flex;
    flex-direction: column;

    span:nth-child(2) {
      color: white
    }
  }
  /* @media (max-width: 1080px) {
    display: none;
  } */
`
export const Content = styled.div`
  
  padding: 2rem 1rem;

  ul {
    color: var(--border-bg);
    list-style: none;
    margin: 0 0 1rem 0;
  }

  span.small {
    font-weight: 100;
    font-size: .8rem;
    
  }

  .contact {
    margin: 1rem 0;
  }

  .follow-me {
    display: flex;
    flex-direction: column;
    a {
      color: var(--border-bg);
      text-decoration: none; /* no underline */
      display: flex;
      margin: 5px 0;
      svg {
        margin-right: 6px;
      }
    }
  }


`