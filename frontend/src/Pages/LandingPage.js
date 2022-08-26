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
import pers1blue2 from '../images/pers1blue2.png'
import pers2blue2 from '../images/pers2blue2.png'
import pers3blue2 from '../images/pers3blue2.png'
import footer from '../images/footer.png'
import nader from '../images/nader.png'
import logolikeminded3 from '../images/logolikeminded3.png'
import fleche from '../images/fleche.png'
import { useHistory } from 'react-router-dom';
import {
    Box,
    Flex,
    Button,
    Stack,
    useColorModeValue
  } from '@chakra-ui/react';
  
  export default function LandingPage() {

    const history = useHistory();

    const redirectHome = () => {
        history.push("/");
      };
  
    return (
        <Box w='100%'>

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
                    <img src={logo} alt=""/>
                </Flex>
        
                <Box d="flex" mr={20}>
                    {/*
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABzElEQVRIie2WO2sVURRG1xEfYGejYm5ifDVaWIil2Bt8IfYqSAox/gTBf6FBsbERgwTSaGVhqT/AVD4CPlG8isaQZFncGxwn98zdmbmkygcDw9n7O2vvM2dmDmxonZSiieoIcBYYA0aBVjc0B7wGZoDplNK7gVSmDqm31UX7a0l9qI42hZ5TfwSAZbXVM3WhN7od1NWSOlGn07VAv6u/M/BY52rL2PJ+Ui+rOwreberzUl5b3RMB3w1Af6lHMv5nPfIn+0FHjO3eOyXfFvWoekx92SN/UW3luKjXA1DViwXPdnU24LlWZG0qsU9VLsk/vS/cnwQOBTz/zV0G7w+C/xTudwY9B6rA/XffakU/u0PZiPqz4hmdiMxe8bzbxbxyxx+D1eegW4F9mfCHKvCrJmDgILA5E5utAj+tmHRSfdG9Dq8MqqdXxoHHFf4n2Yi6V10IvJPHC55LgfwFdTjbcUrpDfCgouq6ul8+IJSXGuAm8G2A0K/ArfLgKnBK6S1wFXAAUIErKaW5vuAufAoYB5YbQJeB8ZTS9Jqd6gX1S43N9Vk936BoUHer99T5AHjezv98VyNojwIm1CkLhwA7x6RHds5o0R/GhtZPfwGYgHy734je2wAAAABJRU5ErkJggg==" alt="réseaux" style={{margin: "15px"}}></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABrUlEQVRIie2VvUtWURzHP0cMBYOEwEQaKmwwyJctg6SloZehsX/AoSH/AQkCiVpEVzehoWjrZUitISFpSopyb1DIzSVfHz8O91643LzPc66PEERfuJx7zv39zuf35Zx7DvzX35A6oj5XV9Tv6jP1SiFmUD2RdXrVsYqQpx6uffWx+kB9r77MJz1Ua+r9SMhoCaSoH2qP2pclzuY+TqltdSAt6moEpKZ+Vn/mQdOFoG/q9RLQ5Ug3quvqcD75bkngR/WeejIXe60C6GaW15q2b4FlYKhgYCR9ttQvwFegFrOOqdazl5BWeRvYBGaA3goTNdLZEMIqQEs6cAf4AJw7RsgO8CvrZKDXadv6R/jRtRRC2CuC3gELxwgBmDt0VO1QX1XYUfW0p14sLUEdUJ+oG02CXtT1qo43a8XETX8jUIf6qUnQROPlS2Cn1Bl19wiQJbXazlW71MkKkGX1TFXIkMmFth8JWVQ7680Z1PPADaATuEBytvVF1rQLTAKPQgjbMQ6uqm+MX5ffJndY+b9SdFQAdgO3gGHgEnAaaCc5cNeAFWARmA8hbMRC/k0dAF1yoPDRYAwKAAAAAElFTkSuQmCC" style={{margin: "15px"}} alt="réseaux"></img>
                    */}
                    <a href="https://www.instagram.com/like_minded_community/">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACS0lEQVRYhe2Wz05TURDGvyGGnTXhCZTUyL/2Ddi59r8hrg0PoDsSQY0+golJW2OihAUr4k6fgKUYIygUiOzViJtW2p+Le244XO69Pbd0Z7/kpOfemW9mzpzp3JGGGCIHQBVoAPtAm3C0HacBVPpxbMAToFPAaRY6wBJgab7OZcTw2K0Y25K+SGoHnmFU0rSksqQRSU8lIelZyOmr3skPgfuBTtNszQF/nK0jYCaE9MpLX1/OgZvAL6AOzHv26iHkfae8naMzBSwAr91aACY9ed3Z+Onqqemed0MCiKt9LUV2AVgBuinF1gWWgRJwCagB1xxvzem0QgKIsZri/FOK4yQ2gFKCuxoLk/5GekZ0jJeS4v/0gaQ7kkpu3ZL01cmqkl4UsHsSaRlwdx6n/TswlsIbAw6865jwZGfOwA1JcSN5YGY/kgru3cP40XF6IjSAsrf/kKP33ttfHmQAoUhtt4MIYMfbX83R82WZfSQXGUU46RXhVk4RfnM6nYEWoZltSlpxj1ckbQB3XdMpAbclrev43pfNbCv82CdPktWISq7J9MJH4HyCWygDf93vqP/SzH5LmpX0VtGnNYmupDeSZs3sMCGLbZ36nJ+qWmBP0kVJTTMrJ+VOZ0LSdUnxPW9KepeWdqJBZEfSuKQ9MxtPs+kTGl4653KVAwDc8+zVQggVouEBomFinoxxKtC5P5BMJ3VSDQNLisaoGE1Jn1VsJKsoSnuMRTN7Hhq5AYteJs6CI+BRX1kEZoimm12gVcBpy3FqwFRhx0P8V/gHgHqKaAFo3VkAAAAASUVORK5CYII=" alt="réseaux" style={{margin: "15px"}}/>
                    </a>
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
                    onClick={redirectHome}>
                    Connexion
                    </Button>
                    
                </Stack>
                </Flex>
            </Box>

            
            <Box
            style={{
                    backgroundImage: `url(${background})`,
                    backgroundPosition: 'center',
                    backgroundSize: '100% 100%'
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
                            {/*<Heading as='h2' size='2xl'>+10 000</Heading>
                            <p>personnes connectées !</p>*/}
                            <br/>
                            <br/>
                            <br/>
                            <Button style={{backgroundColor: "transparent", marginBottom: "150px", border:'1px solid white', borderRadius: "25px"}} _hover={{color:"#34B7F1", backgroundColor:"white !important"}} onClick={redirectHome}>Découvrir Maintenant<div style={{marginLeft: '10px', backgroundColor: "#34B7F1", borderRadius:'50%', width: "32px", height: "32px", display: "flex", justifyContent: "center", alignItems: "center"}}><img src={fleche} alt="fleche" style={{width: "17px"}}/></div></Button>
                        </GridItem>
                        <GridItem>
                            <img style={{marginTop: "150px"}} src={people} alt="people"></img>
                        </GridItem>
                    </Grid>
                </Box>
            </Box>
            
            <Box style={{backgroundColor: 'white'}}>
                <Box w="80%" mx="auto">
                    <Grid templateColumns='repeat(2, 1fr)'>
                        <GridItem>
                            <p style={{marginTop: "150px", color: '#2D5BE3'}}>Ce que nous faisons</p>
                            <Heading as='h2' size='lg' style={{fontFamily: 'Varela Round'}}>Pourquoi rejoindre<br/> la communauté de Like Minded ?</Heading>
                            <br />
                            <p>Nous avons pour ambition de regrouper des gens ayant une<br/> 
                            grande variété de hobbies afin de se regrouper autour de<br/>
                            sujets communs pour faire de nouvelles rencontres,<br/>
                            poursuivre des projets ou organiser des événements. </p>
                            <br/>
                            <Button style={{backgroundColor: "transparent", marginBottom: "150px", border:'1px solid #D7D7D7', borderRadius: "25px"}} _hover={{color:"white", backgroundColor:"#34B7F1 !important"}} onClick={redirectHome}>Rejoindre la communauté<div style={{marginLeft: '10px', backgroundColor: "#34B7F1", borderRadius:'50%', width: "32px", height: "32px", display: "flex", justifyContent: "center", alignItems: "center"}}><img src={fleche} alt="fleche" style={{width: "17px"}}/></div></Button>
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
                                <Heading as='h2' size='lg' style={{marginTop: "150px", color: '#2D5BE3'}}>Notre communauté est présente<br/> dans plus de 130 villes !</Heading>
                                <br/>
                                <p style={{marginBottom: "150px"}}>Ciblez la commune qui vous intéresse et découvrez les gens qui vivent là où<br/> vous êtes. Que vous veniez d’emménager dans une nouvelle ville ou que vous<br/> soyez de passage en vacances, partez à la découverte de vos semblables !</p>
                            </GridItem>
                    </Grid>
                </Box>
            </Box>
            <Box style={{backgroundColor: 'white'}}>
                <Box w="80%" mx="auto" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                    <Heading as='h4' size='lg' style={{fontFamily: 'Varela Round', paddingTop: "120px"}}>Des groupes actifs</Heading>
                    <br/>
                    <p style={{ textAlign: 'center'}}>Rencontrez des gens réactifs sur nos groupes pour échanger et organiser des<br/> projets ou des événements.</p>
                    <br/>
                    <Grid templateColumns='repeat(5, 1fr)' style={{marginTop: '50px'}}>
                        <GridItem style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'center', marginBottom: '50px'}}>
                            <img src={person1b} style={{height: '165px'}} alt=""/>
                        </GridItem>
                        <GridItem style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                            <img src={person1a} style={{height: '225px', width: '225px'}} alt=""/>
                            <br/>
                            <img src={person1c} style={{height: '165px', width: '165px'}} alt=""/>
                        </GridItem>
                        <GridItem style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{height: '250px', width: '250px', backgroundImage: `url(${nader})`, backgroundSize: '250px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flexDirection: 'column', color: 'white'}}>
                            <Heading as='h2' size='md' style={{fontFamily: 'Varela Round'}}>Nader Helali</Heading>
                            <br/>
                            <br/>
                            <p>24 - groupes</p>
                            </div>
                        </GridItem>
                        <GridItem style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                            <img src={person2a} style={{height: '165px', width: '165px'}} alt=""/>
                            <br/>
                            <img src={person2c} style={{height: '225px', width: '225px'}} alt=""/>
                        </GridItem>
                        <GridItem style={{marginTop: '50px', display: 'flex', justifyContent: 'center'}}>
                            <img src={person2b} style={{height: '165px'}} alt=""/>
                        </GridItem>
                    </Grid>
                    <br/>
                    <br/>
                    <Button style={{backgroundColor: "transparent", marginBottom: "120px", border:'1px solid #D7D7D7', borderRadius: "25px"}} _hover={{color:"white", backgroundColor:"#34B7F1 !important"}} onClick={redirectHome}>Découvrir les membres<div style={{marginLeft: '10px', backgroundColor: "#34B7F1", borderRadius:'50%', width: "32px", height: "32px", display: "flex", justifyContent: "center", alignItems: "center"}}><img src={fleche} alt="fleche" style={{width: "17px"}}/></div></Button>
                </Box>
            </Box>
            <Grid templateColumns='repeat(2, 1fr)'>
                <GridItem style={{backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                    <Box w="80%" mx="auto" style={{marginTop: '150px', color: 'white'}}>
                        <Heading as='h2' size='xl' style={{fontFamily: 'Varela Round'}}>Like Minded rend la vie plus<br/> simple & facile</Heading>
                        <br/>                   
                        <p style={{marginBottom: "35px"}}>Ciblez la commune qui vous intéresse et découvrez les gens qui vivent là où<br/> vous êtes. Que vous veniez d’emménager dans une nouvelle ville ou que vous<br/> soyez de passage en vacances, partez à la découverte de vos semblables !</p>
                       
                        <Button style={{backgroundColor: "white", marginBottom: "120px", borderRadius: "25px", color: "black"}} _hover={{color:"white !important", backgroundColor:"#34B7F1 !important"}} onClick={redirectHome}>En savoir plus<div style={{marginLeft: '10px', backgroundColor: "#34B7F1", borderRadius:'50%', width: "32px", height: "32px", display: "flex", justifyContent: "center", alignItems: "center"}}><img src={fleche} alt="fleche" style={{width: "17px"}}/></div></Button>
                    </Box>
                </GridItem>
                <GridItem>
                    <img src={bluepeople} alt='bluepeople' />
                </GridItem>
            </Grid>
            {/* Trouvez des personnes proches de vous */}
            <Box style={{background: 'white'}}>
                <Box w="80%" mx="auto" style={{paddingTop: "150px", paddingBottom: "150px"}}>
                    <Heading as='h4' size='lg' style={{fontFamily: 'Varela Round', textAlign: 'center'}}>Trouvez des personnes proches de vous</Heading>
                    <br/>
                    <p style={{textAlign: 'center'}}>Sélectionnez la ville où vous vous trouvez pour découvrir ses différentes<br/> communautés, les activités et les événements dans le coin !</p>
                    <br/>
                    <Grid templateColumns='repeat(2, 1fr)' style={{}}>
                        <GridItem>
                            <img src={paris} style={{marginRight: '10px', height: '100%'}} alt=""/>
                        </GridItem>
                        <GridItem>
                            <Grid templateColumns='repeat(2, 1fr)'>
                                <GridItem>
                                    <img src={marseille} style={{marginLeft: '10px', marginBottom: '10px', height: '49%'}} alt=""/>
                                    <img src={strasbourg} style={{marginLeft: '10px', height: '49%'}} alt=""/>
                                </GridItem>
                                <GridItem>
                                    <img src={lyon} style={{marginLeft: '20px', marginBottom: '10px', height: '49%'}} alt=""/> 
                                    <img src={bordeaux} style={{marginLeft: '20px', height: '49%'}} alt=""/> 
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
                                <Heading as='h4' size='lg' style={{fontFamily: 'Varela Round'}}>Like Minded rend la vie plus<br/> simple & facile</Heading>
                                <br/>
                                <p>Oubliez l’angoisse du premier pas grâce à Like Minded :<br/> nous vous proposons de nouvelles rencontres pour<br/> poursuivre vos hobbies et échanger sur vos centres<br/> d’intérêts avec des passionnés.</p>
                                <br/>
                                <Button style={{backgroundColor: "#2D5BE3", marginTop: "150px", borderRadius: "25px", color: "white"}} _hover={{color:"#34B7F1 !important", backgroundColor:"white !important", border:"solid 1px #3487F1"}} onClick={redirectHome}>Découvrir l'app<div style={{marginLeft: '10px', backgroundColor: "#34B7F1", borderRadius:'50%', width: "32px", height: "32px", display: "flex", justifyContent: "center", alignItems: "center"}}><img src={fleche} alt="fleche" style={{width: "17px"}}/></div></Button>
                            </GridItem>
                            <GridItem>
                                <img src={iphone} alt=""/>
                            </GridItem>
                        
                    </Grid>
                </Box>
            </Box>

            <Box style={{background: 'white', paddingTop: '150px', paddingBottom: '150px'}}>
                <Box w="80%" mx="auto" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Heading as='h4' size='lg' style={{fontFamily: 'Varela Round', textAlign: 'center'}}>Les groupes les plus populaires</Heading>
                                <br/>
                                <p style={{ textAlign: 'center'}}>Rejoignez les groupes pour échanger sur vos centres d’intérêt ou pour découvrir<br/> de nouveaux hobbies, ou créez le votre !</p>
                                <br/>
                    <Grid templateColumns='repeat(4, 1fr)' >
                        
                            <GridItem style={{marginTop: '110px', marginBottom: '110px'}}>
                                <img src={voyages} style={{marginBottom:"20px", paddingLeft: '10px', paddingRight: '10px'}} alt=""/>
                                <img src={architecture} style={{marginBottom:"20px", paddingLeft: '10px', paddingRight: '10px'}} alt=""/>
                            </GridItem>
                            <GridItem style={{marginTop: '110px', marginBottom: '110px'}}>
                                <img src={lecture} style={{marginBottom:"20px", paddingLeft: '10px', paddingRight: '10px'}} alt=""/>
                                <img src={mode} style={{marginBottom:"20px", paddingLeft: '10px', paddingRight: '10px'}} alt=""/>
                            </GridItem>
                            <GridItem style={{marginTop: '110px', marginBottom: '110px'}}>
                                <img src={sport} style={{marginBottom:"20px", paddingLeft: '10px', paddingRight: '10px'}} alt=""/>
                                <img src={nouvellestechnologies} style={{marginBottom:"20px", paddingLeft: '10px', paddingRight: '10px'}} alt=""/>
                            </GridItem>
                            <GridItem style={{marginTop: '110px', marginBottom: '110px'}}>
                                <img src={automobile} style={{marginBottom:"20px", paddingLeft: '10px', paddingRight: '10px'}} alt=""/>
                                <img src={musique} style={{marginBottom:"20px", paddingLeft: '10px', paddingRight: '10px'}} alt=""/>
                            </GridItem>
                        
                    </Grid>
                    <Button style={{backgroundColor: "transparent", marginTop: "20px", marginBottom: "40px", border:'1px solid #D7D7D7', borderRadius: "25px"}} _hover={{color:"white !important", backgroundColor:"#34B7F1 !important"}} onClick={() => {history.push("/groups")}}>Voir tous les groupes<div style={{marginLeft: '10px', backgroundColor: "#34B7F1", borderRadius:'50%', width: "32px", height: "32px", display: "flex", justifyContent: "center", alignItems: "center"}}><img src={fleche} alt="fleche" style={{width: "17px"}}/></div></Button>
                </Box>
                
            </Box>
            <Box style={{background: `url(${blue2})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', paddingTop: "150px", paddingBottom: "150px", color: 'white'}}>
                <Heading as='h3' size='lg' style={{fontFamily: 'Varela Round', textAlign: 'center'}}>Jasmine Ripaud</Heading>
                <br/>
                <Heading as='h6' size='md' style={{fontFamily: 'Varela Round', textAlign: 'center'}}>Étudiante</Heading>
                <br />
                <p style={{textAlign: 'center'}}>“Super appli ! J’ai rapidement pu rencontrer un groupe de dessin et organiser<br/> des sorties pour dessiner des œuvres au Louvre.“</p>
                <br/>
                <br/>
                <Grid templateColumns='repeat(3, 1fr)' style={{display: "flex", justifyContent: 'center'}}>
                    <GridItem>
                        <img src={pers1blue2} alt='person' style={{paddingLeft:"20px", paddingRight:"20px"}}/>
                    </GridItem>
                    <GridItem>
                        <img src={pers2blue2} alt='person' style={{paddingLeft:"20px", paddingRight:"20px"}}/>
                    </GridItem>
                    <GridItem>
                        <img src={pers3blue2} alt='person' style={{paddingLeft:"20px", paddingRight:"20px"}}/>
                    </GridItem>
                </Grid>
            </Box>

            <Box style={{background: '#EFF4F6'}}>
                <Box style={{background: `url(${footer})`, backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: "1050px"}}>
                    <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: "150px", paddingBottom: "50px", flexDirection: 'column' }}>
                        <Heading as='h3' size='lg' style={{fontFamily: 'Varela Round', paddingLeft: '20px', paddingRight: '20px'}}>Inscrivez-vous à la newsletter</Heading>
                        <br/>
                        <p style={{textAlign: 'center'}}>Souscris pour être le premier à recevoir les informations,<br/> les nouvelles fonctionnalités et bien plus encore !</p>
                        <br/>
                        <Box style={{display: 'flex', flexDirection: 'row'}}>
                            <input type="text" id="name" name="name" required minLength="4" maxLength="12" size="15" placeholder="Entrez votre adresse mail" style={{paddingLeft: '25px', width: '650px', height: '55px', borderRadius: '50px 0px 0px 50px', display: 'flex', justifyContent: 'flex-end', color: 'black'}}></input>
                            <Button style={{backgroundColor: "blue", marginBottom: "150px", borderRadius: "0px 30px 30px 0px", height: '55px', color: 'white'}}>Souscrire</Button>
                        </Box>
                    </Box>
                    <Grid templateColumns='repeat(4, 1fr)' style={{display: "flex", justifyContent: 'center', paddingTop: "240px"}}>
                        <GridItem>
                            <img src={logolikeminded3} alt='logo' style={{height: '18px', marginBottom: '5px'}}/>
                            <br/>
                            <p>L’application web pour rencontrer<br/> des gens comme vous et<br/> organiser vos sorties.</p>
                        </GridItem>
                        <GridItem>
                            <Heading as='h3' size='md' style={{fontFamily: 'Varela Round', paddingLeft: '20px', paddingRight: '20px'}}>Liens importants</Heading>
                            <br/>
                            <p style={{paddingLeft: '20px', paddingRight: '20px'}}>À propos</p>
                            <p style={{paddingLeft: '20px', paddingRight: '20px'}}>Contact</p>
                            <p style={{paddingLeft: '20px', paddingRight: '20px'}}>Mentions légales</p>
                        </GridItem>
                        <GridItem>
                            <Heading as='h3' size='md' style={{fontFamily: 'Varela Round', paddingLeft: '20px', paddingRight: '20px'}}>Communauté</Heading>
                            <br/>
                            <p style={{paddingLeft: '20px', paddingRight: '20px'}}>Fil d'actualité</p>
                            <p style={{paddingLeft: '20px', paddingRight: '20px'}}>Groupes</p>
                            <p style={{paddingLeft: '20px', paddingRight: '20px'}}>Amis</p>
                            <p style={{paddingLeft: '20px', paddingRight: '20px'}}>Forums</p>
                        </GridItem>
                        <GridItem>
                            <Heading as='h3' size='md' style={{fontFamily: 'Varela Round', paddingLeft: '20px', paddingRight: '20px'}}>Réseaux sociaux</Heading> 
                            <br/>
                            {/* <p style={{paddingLeft: '20px', paddingRight: '20px'}}>Facebook</p>
                            <p style={{paddingLeft: '20px', paddingRight: '20px'}}>Twitter</p> */}
                            <a style={{paddingLeft: '20px', paddingRight: '20px'}} href="https://www.instagram.com/like_minded_community/">Instagram</a>
                        </GridItem>
                    </Grid>
                </Box>
            </Box>
            <Box style={{background: '#ECECEC', width: '100%', height: '1px'}}></Box>
            <Box style={{background: 'white'}}>
                <p style={{textAlign: 'center', paddingTop: '15px', paddingBottom: '15px'}}>
                    Copyright © 2022 Like Minded - Tous droits réservés
                </p>
            </Box>
        </Box>
      
    );
  }
  