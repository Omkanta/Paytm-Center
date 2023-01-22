import React from "react";
import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    Icon,
    Text,
    chakra,
    Tooltip,
    Grid,
  } from '@chakra-ui/react';
  // import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
  import axios from "axios";



const ProductsG=()=>{
    const [data,setData]=React.useState([]);

    React.useEffect(()=>{
        axios.get('https://ap-ifor-cw.vercel.app/groceries')
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
    },[]);

    function AddItem(id,image,title,rating,price,e){
      axios.post("https://ap-ifor-cw.vercel.app/cart", {
        id,image,title,price,rating
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    return (
        <div style={{width:'40%'}}>
            
        <Grid width='100%' autoFlow='row' templateColumns="repeat(3,1fr)" gap={3} whiteSpace='wrap'>
        {data.map((el)=>(
                <Flex p={50} key={el.id}  alignItems="center" justifyContent="center">
                <Box
                
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
                      <Tooltip
                        label="Add to cart"
                        bg="white"
                        placement={'top'}
                        color={'gray.800'}
                        fontSize={'1.2em'}>
                        <chakra.a display={'flex'} onClick={(e)=>AddItem(el.id,el.image,el.title,el.rating,el.price,e)}>
                          <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'}/>
                        </chakra.a>
                      </Tooltip>
                    </Flex>
          
                    <Flex justifyContent="space-between" alignContent="center">
                      <Text>Rating:{el.rating}</Text>
                      <Box fontSize="2xl" >
                      {/* color={useColorModeValue('gray.800', 'white')} */}
                        <Box as="span" color={'gray.600'} fontSize="lg">
                          Rs.
                        </Box>
                        {el.price}
                      </Box>
                    
                    </Flex>
                  </Box>
                </Box>
              </Flex>
          
        ))}
        </Grid>
        </div>
    )
       
}

export default ProductsG;