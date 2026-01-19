export const SIMPLE_STORAGE_ABI = [
  {
    inputs: [],
    name: 'getValue',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newValue',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'updatedBy',
          type: 'address',
        },
      ],
    ],
    name: 'ValueUpdated',
    type: 'event',
  },
] as const;
