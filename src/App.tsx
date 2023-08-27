import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'
import GameQuery from './interfaces/GameQuery'
import SortSelector from './components/SortSelector'

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
      templateColumns={{
        base: `1fr`,
        lg: `250px 1fr`
      }}
    >
      <GridItem area='nav' >
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList onSelectGenre={ (genre) => setGameQuery({...gameQuery, genre}) } selectedGenre={gameQuery.genre} />
        </GridItem>
      </Show>

      <GridItem area='main'>
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
          </Box>
          <SortSelector selectedSortOrder={gameQuery.order} onSelectSortOrder={(order) => setGameQuery({...gameQuery, order})} />
        </Flex>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  )
}

export default App
