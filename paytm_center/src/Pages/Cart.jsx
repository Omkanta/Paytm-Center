import React from "react";
import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    Button,
    Text,
    Grid,
  } from '@chakra-ui/react';
  import axios from "axios";



const Cart=()=>{
    const [data,setData]=React.useState([]);
    // let navigate=useNavigate();
    React.useEffect(()=>{
        axios.get('https://ap-ifor-cw.vercel.app/cart')
  .then(function (response) {
    // handle success
    setData(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
    },[])
    function handleDelete(id,e){
        axios.delete(`https://ap-ifor-cw.vercel.app/cart/${id}`)
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });
      }
    return (
        <div style={{width:'40%'}}>
            <Text fontSize={'xx-large'} margin={'auto'}>Cart</Text>
        <Grid width='100%' autoFlow='row' templateColumns="repeat(3,1fr)" gap={3} whiteSpace='wrap'>
        {data.map((el)=>(
                <Flex p={50}   alignItems="center" justifyContent="center">
                <Box
                key={el.id} 
                //   bg={useColorModeValue('white', 'gray.800')}
                  maxW="sm"
                  borderWidth="1px"
                  w="350px"
                  rounded="lg"
                  shadow="lg"
                  position="relative">
                  {data.isNew && (
                    <Circle
                      size="10px"
                      position="absolute"
                      top={2}
                      right={2}
                      bg="red.200"
                    />
                  )}
          
                  <Image
                 margin={'auto'}
                 pt={'20px'}     
                    src={el.image}
                    alt={`Picture of ${el.title}`}
                    roundedTop="lg"
                  />
          
                  <Box p="6">
                    <Box d="flex" alignItems="baseline">
                      {data.isNew && (
                        <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                          New
                        </Badge>
                      )}
                    </Box>
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                      <Box
                        fontSize="2xl"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated>
                        {el.title}
                      </Box>
                      {/* <Tooltip
                         
                        bg="white"
                        placement={'top'}
                        color={'gray.800'}
                        fontSize={'1.2em'}>
                        <chakra.a display={'flex'}  
                          <Icon color={'red.500'} as={AiFillDelete} h={9} w={9} alignSelf={'center'} /> 
                        </chakra.a>
                      </Tooltip> */}
                    </Flex>
          
                    <Flex justifyContent="space-between" alignContent="center">
                      <Text>Rating:{el.rating}</Text>
                    </Flex>
                    <Box fontSize="2xl" >
                      {/* color={useColorModeValue('gray.800', 'white')} */}
                        <Box as="span" color={'gray.600'} fontSize="lg">
                          Rs.
                        </Box>
                        {el.price}
                      </Box>
                  </Box>
                  <Button bg={'red.500'} color={'white'} _hover={{bg:'red.700', color:'white'}} mb={5} onClick={(e)=>handleDelete(el.id,e)}>Delete</Button>
                </Box>
              </Flex>
          
        ))}
        </Grid>
        </div>
    )
       
}

export default Cart;