import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-position: center;
  background-size: cover;
`

export const ContentContainer = styled.div`
  position: absolute;
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
`

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`

export const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: ${props => props.large? '240px' : '380px'};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;
    ${BackgroundContainer} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    ${ContentContainer} {
      opacity: 0.9
    }
  }
`
/*
.menu-item {
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &.large {
        height: 380px;
    }

    &:first-child {
      margin-right: 7.5px;
    }

    &:last-child {
      margin-left: 7.5px;
    }

    &:hover {
        cursor: pointer;

        .background {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .content {
            opacity: 0.9;
        }
    }

    .background {
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
    }

    .content {
      position: absolute;
      height: 90px;
      padding: 0 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      background-color: white;
      opacity: 0.7;

      .title {
        font-weight: bold;
        margin-bottom: 6px;
        font-size: 22px;
        color: #4a4a4a;
      }

      .subtitle {
        font-weight: lighter;
        font-size: 16px;
      }
    }
}
*/