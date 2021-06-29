/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//Se encarga del objeto para la conexion a la base de datos
import java.sql.Connection;
import java.sql.DriverManager;
//esta se encarga de poder realizar las sentencias sql como:
//insert, delete, update, create, alter, drop
import java.sql.Statement;
//Esta de encarga de generar un objeto para poder realizar las consultas sql
import java.sql.ResultSet;
import javax.servlet.ServletConfig;


/**
 *
 * @author Leonardo Hernandez Melendez
 */
public class Registro extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response de atender las respuestas por parte del servidor.
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    //Variables globales
    
    private Connection con;
    private Statement set;
    private ResultSet rs;
    
    //Constructor
    public void init(ServletConfig cfg) throws ServletException{
      //como se va a conectar a la base de datos
      String url = "jdbc:mysql:3306//localhost/registro4iv8";
                    //tipodriver:gestorbd:puerto//ip/nombrebd
                    
       String userName = "root";
       String password = "ichlievedish";
       
       
       try{
           
           Class.forName("com.mysql.jdbc.Driver");
           /*
           Aveces el tipo de driver ya tiene un puerto de comunicacion,
           para solucionarlo solo hacemos esto
           url = "jdbc:mysql://localhost/registro4iv8";
           */
           url = "jdbc:mysql://localhost/registro4iv8";
           con = DriverManager.getConnection(url, userName, password);
           set = con.createStatement();
           
           System.out.println("Conexion exitosa");
           
       
           
       }catch(Exception e){
           System.out.println("Conexion no exitosa");
           System.out.println(e.getMessage());
           System.out.println(e.getStackTrace());
           
       }
    }
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            String nom, appat, apmat, correo;
            int edad;
            
            nom = request.getParameter("nombre");
            appat = request.getParameter("appat");
            apmat = request.getParameter("apmat");
            edad = Integer.parseInt(request.getParameter("edad"));
            correo = request.getParameter("correo");
            
            
            //vamos a intentar reegistrar en la bd
            try{               
                /*
                Para poder registrar un usuario es nesesaria la sentencia 
                'insert'
                
                insert into nombretabla (atributo1, atributo2, ...) values(valor1, valor2, ...)
                "" son valores string
                '' & nada = numerico
                */                
                String q = "insert into mregistro"
                            +"(nombre,appat,apmat,edad,correo)"
                            +"values"
                            +"('"+nom+"','"+appat+"','"+apmat+"',"+edad+",'"+correo+"')";
                
                set.executeUpdate(q);
                System.out.println("Registro Exitoso en la tabla");
            
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Registro</title>");            
            out.println("</head>");
            out.println("<body>"
                    + "<br>"
                    + "Tu nombre es:" +nom
                    + "<br>"
                    + "Tu apellido paterno es :" + appat
                    + "<br>"
                    + "Tu apellido materno es:" + apmat
                    + "<br>"
                    + "Tu edad es :" + edad
                    + "<br>"
                    + "Tu email es :" + correo
                    + "<br>");
            out.println("<h1>Registro Exitoso</h1>"
                    + "<a href='index.html'>Regresar al menu principal</a>");
            out.println("</body>");
            out.println("</html>");
            
            
            
            }catch(Exception e){
                System.out.println("Error al registrar en la tabla");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Registro</title>");            
            out.println("</head>");
            out.println("<body>" + "<br>");
            out.println("<h1>Registro No Exitoso Ocurrio un error</h1>"
                    + "<a href='index.html'>Regresar al menu principal</a>");
            out.println("</body>");
            out.println("</html>");
            
            }
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    
    
    public void destroy(){
        try{
            con.close();
        }catch(Exception e){
            super.destroy();
        }
    }
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
