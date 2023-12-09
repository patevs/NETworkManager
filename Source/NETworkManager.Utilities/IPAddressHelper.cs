﻿using System.Net;

namespace NETworkManager.Utilities;

public static class IPAddressHelper
{

    /// <summary>
    /// Test if an IP address is a private address.
    /// </summary>
    /// <param name="ipAddress">IP address.</param>
    /// <returns>True if the IP address is a private address, otherwise false.</returns>
    public static bool IsPrivateIPAddress(IPAddress ipAddress)
    {
        var addressBytes = ipAddress.GetAddressBytes();

        switch (addressBytes.Length)
        {
            // Check for IPv4 private addresses
            case 4 when addressBytes[0] == 10
                        || (addressBytes[0] == 172 && addressBytes[1] >= 16 && addressBytes[1] <= 31)
                        || (addressBytes[0] == 192 && addressBytes[1] == 168):
            // Check for IPv6 unique local addresses (ULA)
            case 16 when addressBytes[0] == 0xFC || addressBytes[0] == 0xFD:
                return true;
            default:
                return false;
        }
    }

    /// <summary>
    /// Compare two IP addresses.
    /// </summary>
    /// <param name="first">First IP address.</param>
    /// <param name="second">Second IP address.</param>
    /// <returns>0 if the IP addresses are equal, otherwise a negative or positive value.</returns>
    public static int CompareIPAddresses(IPAddress first, IPAddress second)
    {
        byte[] bytesFirst = first.GetAddressBytes();
        byte[] bytesSecond = second.GetAddressBytes();

        for (int i = 0; i < bytesFirst.Length; i++)
            if (bytesFirst[i] != bytesSecond[i])
                return bytesFirst[i] - bytesSecond[i];

        return 0; // IP addresses are equal
    }
}