
export interface Ticket {
    ticketId?: number;
    quantity: number;
    priority: number;
    dateSubmitted?: Date;
    dateCompleted?: Date;
    newPartCost: number;
    title?: string;
    defectSymptom?: string;
    partNumber?: string;
    manufacturer?: string;
    requesterComments?: string;
    resolutionNote?: string;
    userId?: number;
    areaId: number;
    equipmentId: number;
    postRepairDispoId?: number;
    costCenterId?: number;
}
