// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

/* Autogenerated file. Do not edit manually. */

/**
 * @title IDirectionSystem
 * @dev This interface is automatically generated from the corresponding system contract. Do not edit manually.
 */
interface IDirectionSystem {
  function meat_DirectionSystem_initDFS(address tokeniser, address wrld) external returns (address);

  function meat_DirectionSystem_getNextRoom(
    string[] memory tokens,
    uint32 currRm
  ) external returns (uint8 e, uint32 nxtRm);
}
