import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    h1{
        font-size: 28px;
        margin-bottom: 25px;
        cursor: pointer;
        width: 10vw;
    }
`

export const PreviewItem = styled.div`
    display: flex;
    justify-content: space-between;
`
/*
.collection-preview {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    .title {
        font-size: 28px;
        margin-bottom: 25px;
        cursor: pointer;
        width: 10vw;
    }

    .preview {
        display: flex;
        justify-content: space-between;
    }
}
*/