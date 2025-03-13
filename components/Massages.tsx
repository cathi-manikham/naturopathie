'use client';

import React from 'react';
import { Colors } from "@/theme/colors";
import { 
	Container, 
	Heading, 
	Text, 
	Box, 
	VStack, 
	SimpleGrid,
	useColorModeValue,
	Divider,
	Icon,
	Flex,
	Button,
	useColorMode
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaHandHoldingHeart, FaSpa, FaHome, FaArrowRight } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const textStyles = {
	color: "gray.600",
	fontSize: { base: "sm", md: "md", lg: "lg" }
};

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 }
};

const ctaVariants = {
	hidden: { opacity: 0, scale: 0.95 },
	visible: { opacity: 1, scale: 1 }
};

export const Massages = () => {
	const cardBg = useColorModeValue("white", "gray.800");
	const sectionBg = useColorModeValue("gray.50", "gray.900");
	const { colorMode } = useColorMode();

	return (
		<>
			{/* Hero Section */}
			<Box
				as="section"
				height="50vh"
				display="flex"
				alignItems="center"
				justifyContent="center"
				textAlign="center"
				position="relative"
				backgroundImage={`url('/massage-cover.webp')`}
				backgroundSize="cover"
				backgroundPosition="center"
				backgroundRepeat="no-repeat"
				color="white"
				px={4}
			>
				<Box
					position="absolute"
					top="0"
					left="0"
					right="0"
					bottom="0"
					bg="blackAlpha.400"
					zIndex="1"
				/>
				<Box maxW="800px" position="relative" zIndex="2">
					<Heading as="h1" size="2xl" mb={4} color="white">
						Les Massages En Naturopathie
					</Heading>
					<Text fontSize={{ base: "sm", md: "md", lg: "lg" }} color="white">
						Découvrez le massage en Naturopathie
					</Text>
				</Box>
			</Box>

			{/* Content Section */}
			<Box bg={sectionBg} py={{ base: "16", md: "20" }}>
				<Container maxW="7xl">
					<VStack spacing={16} align="stretch">
						{/* Techniques Manuelles Section */}
						<MotionBox
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={cardVariants}
							transition={{ duration: 0.5 }}
						>
							<Flex align="center" mb={8}>
								<Icon as={FaHandHoldingHeart} w={8} h={8} color={Colors.darkPink400} mr={4} />
								<Heading as="h2" color={Colors.darkPink400} size="xl">
									Les techniques manuelles
								</Heading>
							</Flex>
							<Divider mb={8} borderColor={Colors.darkPink400} />
							<VStack spacing={8} align="stretch">
								<Text {...textStyles}>
									Les massages sont aussi appelés <b>« techniques manuelles » en naturopathie</b>. Elles font partie des onze
									techniques que le naturopathe utilise au sein de la cure qu{"'"}il propose au client. Elles servent à
									la <b>détoxification</b>, et à la <b>revitalisation</b>.<br />Contrairement aux exercices physiques, les techniques manuelles et
									l{"'"}<b>hydrothérapie</b> (applications d{"'"}eau chaude ou froide de manière localisée, sauna, etc.) sont des <b>techniques
										passives</b>. Elles permettent de <b>déstabiliser les zones d{"'"}accumulation des déchets</b>, et favorisent également le
									retour veineux et lymphatique, en amenant le mouvement. Elles améliorent les échanges entre le sang et les
									cellules avec l{"'"}accès aux nutriments, le transport et l{"'"}élimination des déchets du métabolisme vers les
									filtres de l{"'"}organisme.
								</Text>
								<Text {...textStyles}>
									Dans le cadre d{"'"}une <b>détoxification</b>, on les propose notamment dans le cas où vous
									avez <b>peu de vitalité</b>.<br />
									Dans une optique de <b>revitalisation</b>, elles peuvent être intégrées dans une routine
									d{"'"}hygiène de vie pour la <b>récupération musculaire</b> post exercices physiques.
								</Text>
								<Text {...textStyles}>
									Les massages garantissent la
									<b>relaxation via le système parasympathique</b>. Ils peuvent avoir un <b>effet sur le plan émotionnel</b>.
								</Text>
							</VStack>
						</MotionBox>

						{/* Massage Drainant Section */}
						<MotionBox
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={cardVariants}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<Flex align="center" mb={8}>
								<Icon as={FaSpa} w={8} h={8} color={Colors.darkPink400} mr={4} />
								<Heading as="h2" color={Colors.darkPink400} size="xl">
									Le massage drainant naturopathique
								</Heading>
							</Flex>
							<Divider mb={8} borderColor={Colors.darkPink400} />
							<VStack spacing={8} align="stretch">
								<Text {...textStyles}>
									Il se pratique au Centre Tout Naturellement. Après deux passages au <b>sauna</b> avec un temps de repos (la chaleur
									a un effet vasodilatateur, le froid un effet vasoconstricteur, le repos permet d{"'"}équilibrer à nouveau la
									répartition des liquides – sang, lymphe, liquide interstitiel - dans le corps), <b>pour faire remonter les
										déchets à la périphérie du corps</b>.<br />Vous pouvez vous faire <b>masser</b>, afin de <b>déloger les déchets des zones de
											tensions</b> des tissus et des muscles qui se trouvent plus en profondeur (peau qui ne se décolle pas, sensation
									de grains de sable, « nœuds » musculaires, etc.). Un dernier passage au sauna, permettra <b>d{"'"}éliminer par la
										transpiration</b>, ce qui a été mobilisé pendant le drainage naturopathique.
								</Text>
								<Text {...textStyles}>
									Ce n{"'"}est pas un massage que je
									propose en dehors du Centre Tout Naturellement car, hors d{"'"}une cure naturopathique, et sans hygiène de vie
									adaptée et amorcée, c{"'"}est un massage qui peut être douloureux. Des effets secondaires indésirables peuvent
									se manifester selon le niveau des déchets du métabolisme circulants qui ne trouvent pas la porte de sortie
									par les organes émonctoires (peau, poumons, reins, foie et intestin).
								</Text>
							</VStack>
						</MotionBox>

						{/* Massages à Domicile Section */}
						<MotionBox
							id="massages-a-domicile"
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={cardVariants}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							<Flex align="center" mb={8}>
								<Icon as={FaHome} w={8} h={8} color={Colors.darkPink400} mr={4} />
								<Heading as="h2" color={Colors.darkPink400} size="xl">
									Les massages que je propose à domicile
								</Heading>
							</Flex>
							<Divider mb={8} borderColor={Colors.darkPink400} />
							<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
								{/* Massage Relaxant */}
								<Box bg={cardBg} p={8} textAlign="center" borderRadius="lg" boxShadow="sm" _hover={{ transform: "translateY(-4px)", boxShadow: "md" }} transition="all 0.3s">
									<Heading as="h3" color={Colors.darkPink400} size="md" mb={6}>
										Les massages relaxant et « détox »
									</Heading>
									<Text {...textStyles} mb={6}>
										Dans ces deux types de massages, les techniques sont <b>enveloppantes et englobantes</b> afin de favoriser <b>l{"'"}état
											de détente</b>. On cherche également à <b>dénouer les tensions</b>, de manière douce.
									</Text>
									<Text {...textStyles} fontSize="sm" color="gray.500">
										Contre-indications : opération récente, inflammations articulaires, insuffisances cardiaque ou rénale, maladies de peau, être enceinte,
										problèmes circulatoires, etc.
									</Text>
								</Box>

								{/* Drainage Manuel */}
								<Box bg={cardBg} p={8} textAlign="center" borderRadius="lg" boxShadow="sm" _hover={{ transform: "translateY(-4px)", boxShadow: "md" }} transition="all 0.3s">
									<Heading as="h3" color={Colors.darkPink400} size="md" mb={6}>
										Le drainage manuel bien-être
									</Heading>
									<Text {...textStyles} mb={6}>
										Ce massage s{"'"}inspire du drainage lymphatique proposé par les kinésithérapeutes, mais n{"'"}est cependant pas à
										visée médicale.<br />Il peut-être intégré à d{"'"}autres massages de type détox. Trois sortes de pressions vont être
										appliquées : superficielle, circulatoire et profonde, le réseau lymphatique se situant à divers niveaux de
										profondeurs de l{"'"}organisme.
									</Text>
									<Text {...textStyles} fontSize="sm" color="gray.500">
										Contre-indications : opération récente, inflammations articulaires, insuffisances cardiaque ou rénale, maladies de peau, être enceinte,
										problèmes circulatoires, etc.
									</Text>
								</Box>

								{/* Chi Nei Tsang */}
								<Box bg={cardBg} p={8} textAlign="center" borderRadius="lg" boxShadow="sm" _hover={{ transform: "translateY(-4px)", boxShadow: "md" }} transition="all 0.3s">
									<Heading as="h3" color={Colors.darkPink400} size="md" mb={6}>
										Le Chi Nei Tsang
									</Heading>
									<Text {...textStyles }  mb={6}>
										Originaire de la Chine Taoïste, ce massage du ventre a pour objectif de guider les « vents viciés » qui
										perturbent les organes vers l{"'"}extérieur de l{"'"}organisme afin de l{"'"}aider à <b>se détoxifier et retrouver
											l{"'"}équilibre de la circulation des énergies</b>.
									</Text>
									<Text {...textStyles} fontSize="sm" color="gray.500">
										Contre-indications : opération récente, porter un stérilet, être enceinte, porter un pacemaker, problèmes circulatoires, etc.
									</Text>
								</Box>
							</SimpleGrid>

							{/* CTA Section */}
							<MotionBox
								mt={16}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								variants={ctaVariants}
								transition={{ duration: 0.5, delay: 0.6 }}
							>
								<Box
									bg={Colors.darkPink100}
									color="white"
									p={{ base: 8, md: 12 }}
									borderRadius="2xl"
									textAlign="center"
									position="relative"
									overflow="hidden"
								>
									<Box
										position="absolute"
										top="0"
										left="0"
										right="0"
										bottom="0"
										bg="blackAlpha.200"
										zIndex="1"
									/>
									<VStack spacing={6} position="relative" zIndex="2">
										<Heading as="h3" size="xl" color="white">
											Prêt à découvrir nos massages ?
										</Heading>
										<Text fontSize={{ base: "md", md: "lg" }} maxW="2xl">
											Réservez votre séance de massage à domicile pour une expérience unique.
										</Text>
										<MotionButton
											as="a"
											href="/pricing"
											size="lg"
											colorScheme="whiteAlpha"
											rightIcon={<FaArrowRight />}
											_hover={{ transform: "translateX(4px)", backgroundColor: Colors.darkPink300 }}
											transition="all 0.3s"
										>
											Voir les tarifs
										</MotionButton>
									</VStack>
								</Box>
							</MotionBox>
						</MotionBox>
					</VStack>
				</Container>
			</Box>
		</>
	);
};
