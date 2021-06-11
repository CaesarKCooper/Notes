- Data networking: collection of protocols that move  information from one device to another device
- Osi: Open Systems Interconnect

- Bridge: takes air vibration and makes it an electrical signal or vise versa for receiver 

	Concept: Message
	Language: English
	Link: Vibration
	Physical: Air

Physical layer protocol
- Twisted pair cable: copper wires twisted together to make connection more efficient 
- Coax cable: router connects to modem
- Fiberoptic cable: Internet uses glass cable

Data link later protocol
- Ethernet: connects network segment
- DOCSIS: modem to internet uses data over cable service interface specification
- CSMA: carrier Sense Multiple Access with Collision Detection
- Half duplex: one communication at a time between devices
- Full duplex: Two devices can communicate at the same time
- Ethernet switch uses mac address table to steer traffic
-  Frame: chunk of date with a data link layer header
- Data: packet of data
- Mac address: manufactory id and serial number
- FCS(CRC): frame check sequence 
- Product data unit: Destination mac address, source mac address, type, data, FCS
- Switches move data to devices
- VLAN: splits network into two different sections
- Trunk link connects two VLAN

Network layer
- Ip addressing: uses unique address for devices on internet
- Ip routing: allows messaging between unique devices
- 4 numbers between 0-255, first three are network portion, last is host portion.
- Ip address is binary address is an octet, 32 bit/numbers 
- Subnet mask shows network and host portion of ip address (255.255.255.0)
- Class A B C are unicast: One device talking to another
- Class D: one device talking to multiple devices
- Network address: identifier of a group of devices, All binary zeros at the end of ip address 
- Broadcast Address: Identifier for all devices on network, All ones at the end of binary host portion
- Host address: unique device on network, not all ones and not all zeros
- /number: shoes network portion of ip address 
- Bit: 1-0, Hex: 0xA
- Nibble: 4 bits, Hex: 0xC9
- Byte: 8 bits
- Hextet: 16 bits, 0xAA46
- IPv6: Network portion and interface portion
- SLAAC: Stateless Address Auto Configuration
- IPv6: gives address of internet full of IPv4 addresses
- ARP: gets layer 2 address from layer 3 address
- IP Routing: transferring data between routers to network
- Dynamic routing(BGP): automatically finds best rout through routers to network

Transport layer
- Transmission Control Protocol (TCP): builds session between devices, through ip address
- Port number: uniquely identifies application protocol 

- Transmission Control Protocol (connection oriented) (TCP): Client sends a SYN(synchronized message) to server, server sent reply (SYN-ACK) client sends message to server (ACK)
- Disconnect: Server sends message to client (FIN) client, client sends (FIN-ACK) to server, Client sends (FIN) to server, server sends (FIN-ACK)
- RST: closes session immediately
- UDP (connection less) (user datagram protocol): no sequence numbers or acknowledge numbers, used for efficient data transfer, no three way handshake, no reliable communication 
- Transport layer port number: Server port numbers  , Client port number

Application layer
- Hypertext Transfer Protocol (http,https): Transfers website/application in server to web browser on client
- Webpages(hypertext) document is a file of instructions of how to present information in web browser.

- Client software to access web server(chrome, safari): web clients that use http/https
- Server software (Apache web server, Ngenix large website) 
- Every application layer Protocol has a transport layer component called port number 

- FTP: file transfer protocol(transfer files from one device to another)
- sFTP: secure file transfer protocol
- TFTP: trivial fire transfer protocol(sending tiny files or transfer files quickly without security check
- SMB: server message block

- POP3(post office protocol) and IMAP(internet message access protocol): take email messages and transfers to clients
- SMTP(simple mail transfer protocol): used to send email message to server

- Lightweight Directory Access Protocol(LDAP): authenticates access via username and passwords

- DHCP(Dynamic host configuration protocol): DHCP server gives ip addresses to connected devices

- DNS(Domain name system): allows us to use simple name to communicate with other devices on internet. Retrieves ip address of server

- NTP(Network time protocol): tells client the current time
- Coordinated Universal time(UTC) 

- Network Management Protocol(telnet is clear text, ssh is encrypted): 
- SNMP(simple network management ): sends message requesting all information from clients
- SNMP Trap: message sent from client to SNMP server
- Remote desktop protocol(RDP): gives the ability to remotely manage a device

- Audio Visual Protocol(H.323): used for video conferencing 
- SIP(session initiation protocol): used to setup phone to server
