"use client"
import React from 'react'

import Image from "next/image";
import CareersFeatures from './components/careersFeatures';
import CareersForm from './components/CareersForm';
import CareersOppotunity from './components/CareersOppotunity';
export default function Careers() {
  return (
    <div>
 <CareersFeatures/>
<CareersForm/>
<CareersOppotunity/>

    </div>
  )
}
