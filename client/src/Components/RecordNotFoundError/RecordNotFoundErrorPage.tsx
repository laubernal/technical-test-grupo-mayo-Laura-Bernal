import { Container, Title } from '@mantine/core';

const RecordNotFoundErrorPage = (): JSX.Element => {
  return (
    <Container sx={{ marginTop: '10vh' }}>
      <Title order={3}>
        I'm sorry the city you're looking for doesn't exist in our database 😭
      </Title>
      <Title order={4}>Please try again with another one!</Title>
    </Container>
  );
};

export default RecordNotFoundErrorPage;
