# donatemask
Donate A Mask Project Repository

This github structure is set up so that this project, initially created for the region of Canada, can readily be copied and adapted for use in other regions should the idea grow.  By creating abstracted regional details upfront, it will be easier to localize later.

The purpose of this project is to create a website and associated mobile applications using the same back end that allow people to do the following:
1. Request masks to be sent to them
   - Input the number of desired masks
   - Input the address for shipping
   - Post a message in the thank you roll (optional)
2. Donate money towards masks
   - Choose an amount of masks to "donate"
     - The system will multiple that amount by the cost per mask (e.g. $2.50/mask) and generate a total amoutn
   - Pay the donation amount via a range of payment services
     - Ideally, payment services will be offered that allow low/no fees for charity donations
   - Create a recurring mask donation every "x" period
   - Post a message in the "inspirational message" roll (optional)
3. View Donate A Mask statistics and messages
   - View the number of masks donated to date (pledged amount of money convereted to "mask" quantity per system multiplier)
   - View the number of masks requested to date
   - View the number of masks requested with no matching donation yet
   - View the thank you message roll
   - View the inspiration message roll
4. Purchase corporate sponsorship with name/logo/level of support, etc.
   - Future addition once up and running and publicised
5. Share messages, mask requests, mask donations, etc. on social media to link people back here

Initially, the back end system will just be a simple database tracking:
- Requestor details
  - name
  - address
  - quantity requested
  - etc.
- Donator details
  - etc. 
- Recurring donation details
  - etc.

Processing of shipments will be manual by volunteers at first.

Eventually, the goal is to automate the back end so that if there are sufficient donated funds, it automates sending the order to the chosen region's supplier for processing.  That will be a bit more complicated as will depend on each supplier's APIs for automated order submission.  





