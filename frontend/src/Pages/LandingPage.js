import logo from '../images/LogoWhite_LikeMinded.png'
import people from '../images/people.png'
import bluepeople from '../images/bluepeople.png'
import { Grid, GridItem, Heading } from '@chakra-ui/react'
import paper  from '../images/paper.png'
import chat  from '../images/chat.png'
import group from '../images/group.png'
import world from '../images/world.png'
import person1a from '../images/person1a.png'
import person1b from '../images/person1b.png'
import person1c from '../images/person1c.png'
import person2a from '../images/person2a.png'
import person2b from '../images/person2b.png'
import person2c from '../images/person2c.png'
import background from '../images/background2.png'
import paris from '../images/paris.png'
import marseille from '../images/marseille.png'
import lyon from '../images/lyon.png'
import strasbourg from '../images/strasbourg.png'
import bordeaux from '../images/bordeaux.png'
import iphone from '../images/iphone.png'
import voyages from '../images/voyages.png'
import lecture from '../images/lecture.png'
import sport from '../images/sport.png'
import automobile from '../images/automobile.png'
import architecture from '../images/architecture.png'
import mode from '../images/mode.png'
import nouvellestechnologies from '../images/nouvelles technologies.png'
import musique from '../images/musique.png'
import blue2 from '../images/blue2.png'
import './LandingPage.css'
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image, 
    Column
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  
  export default function LandingPage() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
        <Box w='100%' >

            
            <Box w="100%">
                <Flex
                bg='#4A46FB'
                color='white'
                minH={'90px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={0.25}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                
                <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }}>
                    <img src={logo} />
                </Flex>
        
                <Box d="flex"
                        mr={20}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABzElEQVRIie2WO2sVURRG1xEfYGejYm5ifDVaWIil2Bt8IfYqSAox/gTBf6FBsbERgwTSaGVhqT/AVD4CPlG8isaQZFncGxwn98zdmbmkygcDw9n7O2vvM2dmDmxonZSiieoIcBYYA0aBVjc0B7wGZoDplNK7gVSmDqm31UX7a0l9qI42hZ5TfwSAZbXVM3WhN7od1NWSOlGn07VAv6u/M/BY52rL2PJ+Ui+rOwreberzUl5b3RMB3w1Af6lHMv5nPfIn+0FHjO3eOyXfFvWoekx92SN/UW3luKjXA1DViwXPdnU24LlWZG0qsU9VLsk/vS/cnwQOBTz/zV0G7w+C/xTudwY9B6rA/XffakU/u0PZiPqz4hmdiMxe8bzbxbxyxx+D1eegW4F9mfCHKvCrJmDgILA5E5utAj+tmHRSfdG9Dq8MqqdXxoHHFf4n2Yi6V10IvJPHC55LgfwFdTjbcUrpDfCgouq6ul8+IJSXGuAm8G2A0K/ArfLgKnBK6S1wFXAAUIErKaW5vuAufAoYB5YbQJeB8ZTS9Jqd6gX1S43N9Vk936BoUHer99T5AHjezv98VyNojwIm1CkLhwA7x6RHds5o0R/GhtZPfwGYgHy734je2wAAAABJRU5ErkJggg==" style={{margin: "15px"}}></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABrUlEQVRIie2VvUtWURzHP0cMBYOEwEQaKmwwyJctg6SloZehsX/AoSH/AQkCiVpEVzehoWjrZUitISFpSopyb1DIzSVfHz8O91643LzPc66PEERfuJx7zv39zuf35Zx7DvzX35A6oj5XV9Tv6jP1SiFmUD2RdXrVsYqQpx6uffWx+kB9r77MJz1Ua+r9SMhoCaSoH2qP2pclzuY+TqltdSAt6moEpKZ+Vn/mQdOFoG/q9RLQ5Ug3quvqcD75bkngR/WeejIXe60C6GaW15q2b4FlYKhgYCR9ttQvwFegFrOOqdazl5BWeRvYBGaA3goTNdLZEMIqQEs6cAf4AJw7RsgO8CvrZKDXadv6R/jRtRRC2CuC3gELxwgBmDt0VO1QX1XYUfW0p14sLUEdUJ+oG02CXtT1qo43a8XETX8jUIf6qUnQROPlS2Cn1Bl19wiQJbXazlW71MkKkGX1TFXIkMmFth8JWVQ7680Z1PPADaATuEBytvVF1rQLTAKPQgjbMQ6uqm+MX5ffJndY+b9SdFQAdgO3gGHgEnAaaCc5cNeAFWARmA8hbMRC/k0dAF1yoPDRYAwKAAAAAElFTkSuQmCC" style={{margin: "15px"}}></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACS0lEQVRYhe2Wz05TURDGvyGGnTXhCZTUyL/2Ddi59r8hrg0PoDsSQY0+golJW2OihAUr4k6fgKUYIygUiOzViJtW2p+Le244XO69Pbd0Z7/kpOfemW9mzpzp3JGGGCIHQBVoAPtAm3C0HacBVPpxbMAToFPAaRY6wBJgab7OZcTw2K0Y25K+SGoHnmFU0rSksqQRSU8lIelZyOmr3skPgfuBTtNszQF/nK0jYCaE9MpLX1/OgZvAL6AOzHv26iHkfae8naMzBSwAr91aACY9ed3Z+Onqqemed0MCiKt9LUV2AVgBuinF1gWWgRJwCagB1xxvzem0QgKIsZri/FOK4yQ2gFKCuxoLk/5GekZ0jJeS4v/0gaQ7kkpu3ZL01cmqkl4UsHsSaRlwdx6n/TswlsIbAw6865jwZGfOwA1JcSN5YGY/kgru3cP40XF6IjSAsrf/kKP33ttfHmQAoUhtt4MIYMfbX83R82WZfSQXGUU46RXhVk4RfnM6nYEWoZltSlpxj1ckbQB3XdMpAbclrev43pfNbCv82CdPktWISq7J9MJH4HyCWygDf93vqP/SzH5LmpX0VtGnNYmupDeSZs3sMCGLbZ36nJ+qWmBP0kVJTTMrJ+VOZ0LSdUnxPW9KepeWdqJBZEfSuKQ9MxtPs+kTGl4653KVAwDc8+zVQggVouEBomFinoxxKtC5P5BMJ3VSDQNLisaoGE1Jn1VsJKsoSnuMRTN7Hhq5AYteJs6CI+BRX1kEZoimm12gVcBpy3FqwFRhx0P8V/gHgHqKaAFo3VkAAAAASUVORK5CYII=" style={{margin: "15px"}}></img>
                </Box>
                

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Button
                    textDecoration="none"
                    fontSize={'md'}
                    color="black"
                    fontWeight={400}
                    variant={'link'}
                    bg={'white'}
                    p="10px 20px"
                    mr="25px"
                    _hover={{
                        bg: 'lightgrey',
                    }}
                    href={'/'}>
                    Connexion
                    </Button>
                    
                </Stack>
                </Flex>
            </Box>

            
            <Box
            style={{
                    backgroundImage: `url(${background})`,
                    backgroundPosition: 'center',
                    backgroundSize: '100% 65vh'
            }}>
                <Box w="80%" mx="auto">
                    <Grid templateColumns='repeat(2, 1fr)'>
                        <GridItem style={{color: "white", fontFamily: 'Varela Round'}}>
                            <br/>
                            <Heading as='h2' size='2xl' style={{marginTop: "150px", fontFamily: 'Varela Round'}}>Rejoignez la communauté</Heading> 
                            <br/>   
                            <p>Avoir de réelles interactions sociales peut enfin être un jeu d'enfant<br/>
                            Soyez VOUS tout simplement !</p>
                            <br/>
                            <Heading as='h2' size='2xl'>+10 000</Heading>
                            <p>personnes connectées !</p>
                            <br/>
                            <Button style={{backgroundColor: "#00ffffff", marginBottom: "150px"}}>Découvrir Maintenant</Button>
                        </GridItem>
                        <GridItem>
                            <img style={{marginTop: "150px"}} src={people} alt={people}></img>
                        </GridItem>
                    </Grid>
                </Box>
            </Box>
            
            <Box style={{backgroundColor: 'white'}}>
                <Box w="80%" mx="auto">
                    <Grid templateColumns='repeat(2, 1fr)'>
                        <GridItem>
                            <p style={{marginTop: "150px", color: '#2D5BE3'}}>Ce que nous faisons</p>
                            <Heading as='h2' size='2xl' style={{fontFamily: 'Varela Round'}}>Pourquoi rejoindre la communauté de <br/>Like Minded ?</Heading>
                            <br />
                            <p>Nous avons pour ambition de regrouper des gens ayant une<br/> 
                            grande variété de hobbies afin de se regrouper autour de<br/>
                            sujets communs pour faire de nouvelles rencontres,<br/>
                            poursuivre des projets ou organiser des événements. </p>
                            <br/>
                            <Button style={{backgroundColor: "#00ffffff"}}>Rejoindre la communauté</Button>
                        </GridItem>
                        <GridItem style={{marginTop: "150px", marginBottom: "150px"}}>
                            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <Box style={{ width: "100px", height: "100px", display: 'flex', justifyContent:"center", alignItems: "center", borderRadius: "50%", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                                    <img src={group} alt="group" style={{height: "50px"}} />
                                </Box>
                                <Box style={{marginLeft: '50px'}}>
                                    <Heading as='h4' size='md' style={{fontFamily: 'Varela Round'}}>Rencontrez de vraies personnes</Heading>
                                    <p>Découvrez les profils des gens dans la même ville que<br/> vous pour organiser vos rencontres plus facilement.</p>
                                </Box>
                            </Box>
                            <br/>
                            <Box width="80%" mx="auto" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <Box style={{ width: "100px", height: "100px", display: 'flex', justifyContent:"center", alignItems: "center", borderRadius: "50%", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                                    <img src={chat} alt="chat" style={{height: "50px"}} />
                                </Box>
                                <Box style={{marginLeft: '50px'}}>
                                    <Heading as='h4' size='md' style={{fontFamily: 'Varela Round'}}>Sujets de discussion variés</Heading>
                                    <p>Indiquez vos hobbies sur votre profil pour cibler les<br/> groupes de discussion qui vous correspondent au mieux.</p>
                                </Box>
                            </Box>
                            <br/>
                            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <Box style={{ width: "100px", height: "100px", display: 'flex', justifyContent:"center", alignItems: "center", borderRadius: "50%", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                                    <img src={paper} alt="paper" style={{height: "50px"}} />
                                </Box>
                                <Box style={{marginLeft: '50px'}}>
                                    <Heading as='h4' size='md' style={{fontFamily: 'Varela Round'}}>Des groupes actifs</Heading>
                                    <p>Rejoignez les activités et événements proposés sur nos<br/> groupes ou échangez simplement sur vos sujets favoris.</p>
                                </Box>
                            </Box>
                        </GridItem>
                    </Grid>
                </Box>
            </Box>
            <Box style={{backgroundColor: '#F6F6F6'}}>
                <Box w="80%" mx="auto">
                    <Grid templateColumns='repeat(2, 1fr)'>
                            <GridItem style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end'}}>
                                <img src={world} alt="world" />
                            </GridItem>
                            <GridItem>
                                <Heading as='h2' size='2xl' style={{marginTop: "150px", color: '#2D5BE3'}}>Notre communauté est présente<br/> dans plus de 130 villes !</Heading>
                                <br/>
                                <p style={{marginBottom: "150px"}}>Ciblez la commune qui vous intéresse et découvrez les gens qui vivent là où<br/> vous êtes. Que vous veniez d’emménager dans une nouvelle ville ou que vous<br/> soyez de passage en vacances, partez à la découverte de vos semblables !</p>
                            </GridItem>
                    </Grid>
                </Box>
            </Box>
            <Box style={{backgroundColor: 'white'}}>
                <Box w="80%" mx="auto" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                    <Heading as='h4' size='md' style={{fontFamily: 'Varela Round', paddingTop: "150px"}}>Des groupes actifs</Heading>
                    <br/>
                    <p style={{ textAlign: 'center'}}>Rencontrez des gens réactifs sur nos groupes pour échanger et organiser des<br/> projets ou des événements.</p>
                    <br/>
                    <Grid templateColumns='repeat(5, 1fr)' style={{marginTop: '150px'}}>
                        <GridItem style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'center', marginBottom: '50px'}}>
                            <img src={person1b} style={{height: '165px'}}/>
                        </GridItem>
                        <GridItem style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                            <img src={person1a} style={{height: '225px', width: '225px'}}/>
                            <br/>
                            <img src={person1c} style={{height: '165px', width: '165px'}}/>
                        </GridItem>
                        <GridItem style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div class="nader" style={{}}>
                                Nader Helali<br/>
                                - ----<br/>
                                24 - groupes
                            </div>
                        </GridItem>
                        <GridItem style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                            <img src={person2a} style={{height: '165px', width: '165px'}}/>
                            <br/>
                            <img src={person2c} style={{height: '225px', width: '225px'}}/>
                        </GridItem>
                        <GridItem style={{marginTop: '50px', display: 'flex', justifyContent: 'center'}}>
                            <img src={person2b} style={{height: '165px'}}/>
                        </GridItem>
                    </Grid>
                    <Button style={{backgroundColor: "#00ffffff", marginTop: '150px', marginBottom: '150px'}}>Découvrir les membres</Button>
                </Box>
            </Box>
            <Grid templateColumns='repeat(2, 1fr)'>
                <GridItem style={{backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                    <Box w="80%" mx="auto" style={{marginTop: '150px', color: 'white'}}>
                        <Heading as='h2' size='2xl' style={{fontFamily: 'Varela Round'}}>Like Minded rend la vie plus simple & facile</Heading>
                        <br/>                   
                        <p style={{marginBottom: "150px"}}>Ciblez la commune qui vous intéresse et découvrez les gens qui vivent là où<br/> vous êtes. Que vous veniez d’emménager dans une nouvelle ville ou que vous<br/> soyez de passage en vacances, partez à la découverte de vos semblables !</p>
                    </Box>
                </GridItem>
                <GridItem>
                    <img src={bluepeople} alt='bluepeople' />
                </GridItem>
            </Grid>
            {/* Trouvez des personnes proches de vous */}
            <Box style={{background: 'white'}}>
                <Box w="80%" mx="auto" style={{paddingTop: "150px", paddingBottom: "150px"}}>
                    <Heading as='h4' size='md' style={{fontFamily: 'Varela Round', textAlign: 'center'}}>Trouvez des personnes proches de vous</Heading>
                    <br/>
                    <p style={{ textAlign: 'center'}}>Sélectionnez la ville où vous vous trouvez pour découvrir ses différentes<br/> communautés, les activités et les événements dans le coin !</p>
                    <br/>
                    <Grid templateColumns='repeat(2, 1fr)'>
                        <GridItem>
                            <img src={paris} style={{marginRight: '10px'}}/>
                        </GridItem>
                        <GridItem>
                            <Grid templateColumns='repeat(2, 1fr)'>
                                <GridItem>
                                    <img src={marseille} style={{marginLeft: '10px', marginBottom: '10px'}}/>
                                    <img src={strasbourg} style={{marginLeft: '10px'}}/>
                                </GridItem>
                                <GridItem>
                                    <img src={lyon} style={{marginLeft: '20px', marginBottom: '10px'}}/> 
                                    <img src={bordeaux} style={{marginLeft: '20px'}}/> 
                                </GridItem>
                            </Grid>
                        </GridItem>
                    </Grid>
                </Box>
            </Box>

            <Box style={{background: '#F8F8F8'}}>
                <Box w="80%" mx="auto">
                    <Grid templateColumns='repeat(2, 1fr)' >
                        
                            <GridItem style={{marginTop: '150px', marginBottom: '150px'}}>
                                <Heading as='h4' size='md' style={{fontFamily: 'Varela Round', textAlign: 'center'}}>Like Minded rend la vie plus simple & facile</Heading>
                                <br/>
                                <p style={{ textAlign: 'center'}}>Oubliez l’angoisse du premier pas grâce à Like Minded :<br/> nous vous proposons de nouvelles rencontres pour<br/> poursuivre vos hobbies et échanger sur vos centres<br/> d’intérêts avec des passionnés.</p>
                                <br/>
                                <Button style={{backgroundColor: "#00ffffff", marginTop: '150px'}}>Découvrir l'app</Button>
                            </GridItem>
                            <GridItem>
                                <img src={iphone} />
                            </GridItem>
                        
                    </Grid>
                </Box>
            </Box>

            <Box style={{background: 'white', paddingTop: '150px', paddingBottom: '150px'}}>
                <Box w="80%" mx="auto" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Heading as='h4' size='md' style={{fontFamily: 'Varela Round', textAlign: 'center'}}>Les groupes les plus populaires</Heading>
                                <br/>
                                <p style={{ textAlign: 'center'}}>Rejoignez les groupes pour échanger sur vos centres d’intérêt ou pour découvrir<br/> de nouveaux hobbies, ou créez le votre !</p>
                                <br/>
                    <Grid templateColumns='repeat(4, 1fr)' >
                        
                            <GridItem style={{marginTop: '150px', marginBottom: '150px'}}>
                                <img src={voyages} style={{marginBottom:"20px", paddingLeft: '10px', paddingRight: '10px'}}/>
                                <img src={architecture} style={{marginBottom:"20px", paddingLeft: '10px', paddingRight: '10px'}}/>
                            </GridItem>
                            <GridItem style={{marginTop: '150px', marginBottom: '150px'}}>
                                <img src={lecture} style={{marginBottom:"20px", paddingLeft: '10px', paddingRight: '10px'}}/>
                                <img src={mode} style={{marginBottom:"20px", paddingLeft: '10px', paddingRight: '10px'}}/>
                            </GridItem>
                            <GridItem style={{marginTop: '150px', marginBottom: '150px'}}>
                                <img src={sport} style={{marginBottom:"20px", paddingLeft: '10px', paddingRight: '10px'}}/>
                                <img src={nouvellestechnologies} style={{marginBottom:"20px", paddingLeft: '10px', paddingRight: '10px'}}/>
                            </GridItem>
                            <GridItem style={{marginTop: '150px', marginBottom: '150px'}}>
                                <img src={automobile} style={{marginBottom:"20px", paddingLeft: '10px', paddingRight: '10px'}}/>
                                <img src={musique} style={{marginBottom:"20px", paddingLeft: '10px', paddingRight: '10px'}}/>
                            </GridItem>
                        
                    </Grid>
                    <Button style={{backgroundColor: "#00ffffff"}}>Voir tous les groupes</Button>
                </Box>
                <Box style={{background: `url('../images/blue2.png')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>

                </Box>
            </Box>

            
        </Box>
      
    );
  }
  