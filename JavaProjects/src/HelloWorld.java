import java.io.Console;
import java.math.*;

/**
 * 
 */

/**
 * @author KwongCheongNg
 *
 */
public class HelloWorld {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// Data types
		int max = 999999999;
		int min = -999999999;
		short shMax = 1233;
		short shMin = -1233;
		long lMax = 99999999900000000L; //include indentity to signigy L
		long lMin = -999999999999999L;
		float val1 = 1233.33f;
		float f1 = 1244f/55f;
		double valDouble = 12355d;
		double d1 = 1244d/55d;
		boolean t = true;
		
		
		
		double d_a = 1.05;
		double d_b = 3.55;
		BigDecimal bd_a = new BigDecimal(d_a); // type-casting
		BigDecimal bd_b = new BigDecimal(d_b);
		
		//explicit typecasting
		short max_a = (short)max;
		String s_max = String.valueOf(valDouble);
		
		if (t) {
/*			System.out.println("Hello World!");
			System.out.println(lMax);
			System.out.println(f1);
			System.out.println(d1);
			System.out.print("Double value: " + valDouble);
			*/
			System.out.println(d_b + d_a);
			System.out.println(s_max);
			System.out.println(bd_a.add(bd_b).setScale(1, BigDecimal.ROUND_CEILING));
		}		
	}

}
