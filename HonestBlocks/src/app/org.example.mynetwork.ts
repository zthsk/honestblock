import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.example.mynetwork{
   export abstract class supplyChainMember extends Participant {
      participantID: string;
   }
   export class medicine extends Asset {
      medicineID: string;
      medicineName: string;
      manufactureDate: Date;
      expiryDate: Date;
      manufacturer: Manufacturer;
      owner: supplyChainMember;
   }
   export class Box extends Asset {
      boxId: string;
      trackingCode: string;
      originAddress: string;
      destinationAddress: string;
      currentAddress: string;
      status: boxStatus;
      medicineContained: medicine[];
      quantityProvided: string[];
      shipment: shipment;
      parentcontract: Contract;
      previousBox: Box;
   }
   export class shipment extends Asset {
      shipmentID: string;
      boxId: Box[];
      routename: string;
      reachedDestination: boolean;
      owner: transporter;
   }
   export class Contract extends Asset {
      contractID: string;
      medicineID: medicine[];
      quantity: string[];
      status: paymentStatus;
      completionstatus: completionStatus;
      price: number;
      seller: supplyChainMember;
      buyer: supplyChainMember;
   }
   export enum paymentStatus {
      PAID,
      UNPAID,
   }
   export enum shipmentStatus {
      DELIVERED,
      ONTHEWAY,
   }
   export class contact {
      name: string;
      address: string;
      contact_number: string;
   }
   export enum boxStatus {
      DELIVERED,
      ONTHEWAY,
   }
   export enum completionStatus {
      REJECTED,
      PARTIAL,
      FULL,
   }
   export class Manufacturer extends supplyChainMember {
      name: string;
      contactfield: contact;
   }
   export class Distributor extends supplyChainMember {
      distributorID: string;
      contactfield: contact;
   }
   export class Customer extends supplyChainMember {
      customerID: string;
      contactfield: contact;
   }
   export class transporter extends Participant {
      transporterID: string;
      contactfield: contact;
   }
   export class updateShipment extends Transaction {
      newTrackingCode: string;
      newCurrentAddress: string;
      newStatus: shipmentStatus;
      shipment: shipment;
   }
   export class createContract extends Transaction {
      contractID: string;
      medicineID: medicine[];
      quantity: string[];
      status: paymentStatus;
      completionstatus: completionStatus;
      price: number;
      seller: supplyChainMember;
      buyer: supplyChainMember;
   }
   export class createBox extends Transaction {
      boxId: string;
      trackingCode: string;
      originAddress: string;
      destinationAddress: string;
      currentAddress: string;
      status: boxStatus;
      medicineContained: medicine[];
      quantityProvided: string[];
      shipment: shipment;
      parentcontract: Contract;
      previousBox: Box;
   }
   export class createShipment extends Transaction {
      shipmentID: string;
      boxId: Box[];
      routename: string;
      reachedDestination: boolean;
      owner: transporter;
   }
   export class updateContract extends Transaction {
      status: paymentStatus;
      completionstatus: completionStatus;
      contract: Contract;
   }
   export class createMedicine extends Transaction {
      medicineID: string;
      medicineName: string;
      manufactureDate: Date;
      expiryDate: Date;
      manufacturer: Manufacturer;
      owner: supplyChainMember;
   }
   export class deleteShipment extends Transaction {
      Shipment: shipment;
   }
   export class updateShipmentStatus extends Transaction {
      shipment: shipment;
      reachedDestination: boolean;
   }
   export class updateBox extends Transaction {
      box: Box;
      currentAddress: string;
   }
   export class updateBoxStatus extends Transaction {
      box: Box;
      status: boxStatus;
   }
   export class updateMedicine extends Transaction {
      medicine: medicine;
      newOwner: supplyChainMember;
   }
   export class error extends Event {
      message: string;
      detail: string;
   }
   export class updateShipmentEvent extends Event {
      newTrackingCode: string;
      newCurrentAddress: string;
   }
   export class updateContractEvent extends Event {
      newPaymentStatus: paymentStatus;
   }
   export class deleteShipmentEvent extends Event {
      shipmentID: string;
      status: shipmentStatus;
   }
   export class createMedicineEvent extends Event {
      medicineID: string;
      medicineName: string;
   }
   export class createContractEvent extends Event {
      status: paymentStatus;
      medicineID: medicine[];
      quantity: string[];
   }
   export class createShipmentEvent extends Event {
      boxId: Box[];
      reachedDestination: boolean;
   }
   export class updateShipmentStatusEvent extends Event {
      reachedDestination: boolean;
   }
   export class updateMedicineEvent extends Event {
      medicine: medicine;
      newOwner: supplyChainMember;
      certificate: string;
   }
   export class createBoxEvent extends Event {
      medicineContained: medicine[];
      quantity: string[];
      status: boxStatus;
   }
   export class updateBoxEvent extends Event {
      newBoxAddress: string;
   }
   export class updateBoxStatusEvent extends Event {
      status: boxStatus;
   }
// }