import React from "react";
import { Stack, HStack, VStack ,Image,Box,Text,Divider, Button  } from '@chakra-ui/react';

import {AiFillApple,AiFillWindows,AiFillAndroid,AiOutlineTwitter,AiFillFacebook,AiFillYoutube,AiFillInstagram} from "react-icons/ai";
const Home=()=>{
    return <>

        <VStack spacing="10px" h="1600px" mt={5}>

            <Text fontSize="xl" fontWeight="bold">Grocery & Home Furnishing</Text>
        <HStack spacing="30px" h="45%" w="90%">
        <Box   w="23%" >
            <Image src="https://assetscdn1.paytm.com/images/catalog/view_item/498479/1613247367528.png?imwidth=414&impolicy=hq"/>
            <Text fontSize='xl'>Big Bazzar</Text>
        </Box>
        <Box   w="23%" >
            <Image  src="https://assetscdn1.paytm.com/images/catalog/view_item/498482/1620737072141.png?imwidth=414&impolicy=hq"/>
            <Text fontSize='xl'>Urban ladder</Text>
        </Box>
        <Box   w="23%" >
            <Image  src="https://assetscdn1.paytm.com/images/catalog/view_item/498480/1620737097910.jpg?imwidth=414&impolicy=hq"/>
            <Text fontSize='xl'>@ Home</Text>
        </Box>
        <Box w="23%" >
            <Image  src="https://assetscdn1.paytm.com/images/catalog/view_item/498490/1610567023040.png?imwidth=414&impolicy=hq"/>
            <Text fontSize='xl'>Prestige</Text>
        </Box>
    </HStack>
    <Text fontSize="xl" fontWeight="bold">Jewellery Brands</Text>
    <HStack spacing="30px" h="45%" w="90%">
        <Box w="23%" >
            <Image src="https://assetscdn1.paytm.com/images/catalog/view_item/711188/1613028659969.png?imwidth=414&impolicy=hq"/>
            <Text fontSize='xl'>Kalyan</Text>
        </Box>
        <Box  w="23%" >
            <Image src="https://assetscdn1.paytm.com/images/catalog/view_item/711194/1620745874093.jpg?imwidth=414&impolicy=hq"/>
            <Text fontSize='xl'>Jewelfina</Text>
        </Box>
        <Box  w="23%" >
            <Image src="https://assetscdn1.paytm.com/images/catalog/view_item/711199/1613028660058.jpg?imwidth=414&impolicy=hq"/>
            <Text fontSize='xl'>Tanishq</Text>
        </Box>
        <Box   w="23%" >
            <Image src="https://assetscdn1.paytm.com/images/catalog/view_item/711200/1620745456365.jpg?imwidth=414&impolicy=hq"/>
            <Text fontSize='xl'>Josalukkas</Text>
        </Box>
    </HStack>
    <Text fontSize="xl" fontWeight="bold">Fashion & Clothes</Text>
    <HStack spacing="30px" h="45%" w="90%">
        <Box w="23%" >
            <Image borderRadius={10} src="https://www.yoox.com/images/yoox80/banners/6825_1_Boss_M_Tris.jpg?634485886601286852#width=473&height=660"/>
            <Text fontSize='xl'>Men's Clothing</Text>
        </Box>
        <Box  w="23%" >
            <Image borderRadius={10} src="https://www.yoox.com/images/yoox80/banners/6825_3_NewBalance_ADV_W.jpg?634485886601286852#width=473&height=660"/>
            <Text fontSize='xl'>Women's Clothing</Text>
        </Box>
        <Box  w="23%" >
            <Image borderRadius={10} src="https://www.yoox.com/images/yoox80/banners/6821_6_Kenzo_Tris_K.jpg?634485886601286852#width=387&height=540"/>
            <Text fontSize='xl'>Kid's Clothing</Text>
        </Box>
        <Box   w="23%" >
            <Image borderRadius={10} src="https://www.yoox.com/images/yoox80/banners/6825_2_AdidasByStella_Tris_W.jpg?634485886601286852#width=473&height=660"/>
            <Text fontSize='xl'>Clothing Accessories</Text>
        </Box>
    </HStack>
        </VStack>
    <Divider mb="20px" />
    <Stack textAlign="left" m="10px">
    <Text fontSize="sm" as="b">Paytm Mall - India’s Leading Online Shopping Experience, Brought to You by Paytm</Text>
    <Text fontSize="xs"> Online shopping with Paytm Mall is quick, convenient and trouble-free. You can shop for the desired product right from the comfort of your home and get them delivered straight to your doorstep.</Text>
    <Text fontSize="xs">Browse Paytm Mall and get access to over 65 million products ranging from smartphones, tablets to laptops, sarees, kurtas & kurtis to t-shirts, sneakers, sport shoes to sandals, earrings, watches to fitness bands, chimneys, cookware to gas stoves, dairy products, baby products to makeup kits and many more.</Text>
    
    <Text fontSize="sm" as="b">What are we offering on Paytmmall.com?</Text>
    <Text fontSize="xs">Paytm Mall strives hard to make your online shopping a more pleasant and cost-effective experience by providing the top quality products at the best price rates in India. Our collection of products consist of electronic appliances, clothes, grocery, home and kitchen products, backpacks, automobiles, books and stationery, to name a few. </Text>
    <Text fontSize="xs">The super value bazaar offers an extensive range of grocery products like daily food staples, ready to cook food, high on nutrition food, beauty, make-up, personal care, health, baby care products and many more. Also take a look at the latest Automobile section that consists of cars, bikes, scooters, sports bikes, accessories, riding gear and automotive care.</Text>
    <Text fontSize="xs">Shop by categories, check out all the available deals, limited period offers, cashback offers, seasonal sales, and there is so much more to make your online shopping experience enjoyable & gratifying!</Text>
    
    <Text fontSize="sm" as="b">Benefits of shopping on Paytmmall.com</Text>
    <Text fontSize="xs"><b>User-Friendly:</b> Leading online shopping experience in India which is simple and faster to load. Shop on the go and get the products delivered in just a few easy clicks.</Text>
    <Text fontSize="xs"><b>Safe & Secure Shopping:</b> You need not worry about your account credentials or personal details.
    <li>Each and every transaction at Paytm Mall is securely processed and you can be rest assured that your money is in safe hands.</li></Text>

    <Text fontSize="xs"><b>Check Out Closely:</b> View products of your choice in detail with clear images and thorough descriptions before buying.</Text>
    <Text fontSize="xs"><b>Multiple Payment Options:</b> You need not worry about your account credentials or personal details.
    <li>Use Paytm Wallet for quick checkouts & hassle-free payments</li></Text>

    <Text fontSize="xs"><b>Paytm Postpaid Services:</b>  Now, you can buy today and pay next month with Paytm-ICICI Bank Postpaid.</Text>
    <Text fontSize="xs"><b>Order History: </b> All your orders show up at one place, you can track them or repeat them with ease.
    <li>Trouble-free returns, track request & replacement of your orders</li></Text>
    </Stack>

<HStack > 
    <Button   _hover={{bg:"white"}} bg="white" fontSize="xs" color="orange.400">About us</Button>
    <Button _hover={{bg:"white"}} bg="white" fontSize="xs" color="orange.400">Partner with us</Button>
    <Button  _hover={{bg:"white"}} bg="white" fontSize="xs" color="orange.400">Terms & Conditions</Button>
    <Button  _hover={{bg:"white"}} bg="white" fontSize="xs" color="orange.400">Blog</Button>
    <Button  _hover={{bg:"white"}} bg="white" fontSize="xs" color="orange.400">Media</Button>
    <Button  _hover={{bg:"white"}} bg="white" fontSize="xs" color="orange.400">24x7 Help</Button>
    <Button  _hover={{bg:"white"}} bg="white" fontSize="xs" color="orange.400">Grievance policy</Button>
    <Button  _hover={{bg:"white"}} bg="white" fontSize="xs" color="orange.400">Bug bounty</Button>
    <Button  mr={4} _hover={{bg:"white"}} bg="white" fontSize="xs" color="orange.400">Return policy</Button>
    <AiFillApple color="#FF5722"/>
    <AiFillWindows color="#FF5722"/>
    <AiFillAndroid color="#FF5722"/>
    <Divider height="20px" width="10px" orientation='vertical' />
    <AiFillInstagram color="#FF5722"/>
   <AiOutlineTwitter color="#FF5722"/>
   <AiFillFacebook color="#FF5722" /> 
   <AiFillYoutube color="#FF5722"/>
</HStack>
    </>
}

export default Home;