import React from 'react';

const OurTeam = () => {
    return (
        <div>

            <h2 style = {{textAlign: 'center'}}>Our Team Members</h2>
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        
                        <th scope="col">Name</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Email Adress</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                        <td>Mark Otto</td>
                        <td>Managing Director</td>
                        <td>mark@gmail.com</td>
                    </tr>
                    <tr>
                        
                        <td>Jacob Thornton</td>
                        <td>General Manager</td>
                        <td>jacob@gmail.com</td>
                    </tr>
                    <tr>
                        
                        <td>Larry Bird</td>
                        <td>Sales Manager</td>
                        <td>larrybird@gmail.com</td>
                    </tr>
                    <tr>
                        
                        <td>Jack Ma</td>
                        <td>Sales Executive</td>
                        <td>jackma@gmail.com</td>
                    </tr>
                    <tr>
                        
                        <td>Mark Zuckerburg</td>
                        <td>Social Media Manager</td>
                        <td>markzuckerburg@gmail.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OurTeam;