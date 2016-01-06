package com.odecee.core.servlets.response;

import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.Locale;
import java.util.ResourceBundle;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.apache.sling.api.SlingHttpServletResponse;

/**
 * Dummy Response for doHead implementation.
 * <p>
 * Code taken from javax.Servlet (private class!)
 */
public class NoBodyResponse implements SlingHttpServletResponse {

	private final SlingHttpServletResponse resp;
	private final NoBodyOutputStream noBody;
	private PrintWriter writer;
	private boolean didSetContentLength;

	public NoBodyResponse(SlingHttpServletResponse r) {
		resp = r;
		noBody = new NoBodyOutputStream();
	}

	public void setContentLength() {
		if (!didSetContentLength) {
			resp.setContentLength(noBody.getContentLength());
		}
	}

	@Override
	public void addCookie(Cookie cookie) {
		resp.addCookie(cookie);
	}

	@Override
	public void addDateHeader(String name, long value) {
		resp.addDateHeader(name, value);
	}

	@Override
	public void addHeader(String name, String value) {
        resp.addHeader(name, value);
    }

	@Override
	public void addIntHeader(String name, int value) {
        resp.addIntHeader(name, value);
    }

	@Override
	public boolean containsHeader(String name) {
        return resp.containsHeader(name);
    }

	@Override
	public String encodeRedirectURL(String url) {
        return resp.encodeRedirectURL(url);
    }

	@Override
	public String encodeRedirectUrl(String url) {
        return encodeRedirectURL(url);
    }

	@Override
	public String encodeURL(String url) {
        return resp.encodeURL(url);
    }

	@Override
	public String encodeUrl(String url) {
        return encodeURL(url);
    }

	@Override
	public void sendError(int sc) throws IOException {
        resp.sendError(sc);
    }

	@Override
	public void sendError(int sc, String msg) throws IOException {
        resp.sendError(sc, msg);
    }

	@Override
	public void sendRedirect(String location) throws IOException {
        resp.sendRedirect(location);
    }

	@Override
	public void setDateHeader(String name, long date) {
        resp.setDateHeader(name, date);
    }

	@Override
	public void setHeader(String name, String value) {
        resp.setHeader(name, value);
    }

	@Override
	public void setIntHeader(String name, int value) {
        resp.setIntHeader(name, value);
    }

	@Override
	public void setStatus(int sc) {
        resp.setStatus(sc);
    }

	@Override
	public void setStatus(int sc, String sm) {
        resp.setStatus(sc, sm);
    }

	@Override
	public void flushBuffer() throws IOException {
        resp.flushBuffer();
    }

	@Override
	public int getBufferSize() {
        return resp.getBufferSize();
    }

	@Override
	public String getCharacterEncoding() {
        return resp.getCharacterEncoding();
    }

	@Override
	public String getContentType() {
        return resp.getContentType();
    }

	@Override
	public Locale getLocale() {
		return resp.getLocale();
	}

	@Override
	public ServletOutputStream getOutputStream() throws IOException {
		return noBody;
	}

	@Override
	public PrintWriter getWriter() throws IOException {
		if (writer == null) {
            OutputStreamWriter w = new OutputStreamWriter(noBody,
                    getCharacterEncoding());
            writer = new PrintWriter(w);
        }
        return writer;
	}

	@Override
	public boolean isCommitted() {
		return resp.isCommitted();
	}

	@Override
	public void reset() {
		resp.reset();
	}

	@Override
	public void resetBuffer() {
        resp.resetBuffer();
    }

	@Override
	public void setBufferSize(int size) {
        resp.setBufferSize(size);
    }

	@Override
	public void setCharacterEncoding(String charset) {
        resp.setCharacterEncoding(charset);
    }

	@Override
	public void setContentLength(int len) {
        resp.setContentLength(len);
        didSetContentLength = true;
    }

	@Override
	public void setContentType(String type) {
        resp.setContentType(type);
    }

	@Override
	public void setLocale(Locale loc) {
        resp.setLocale(loc);
    }

	@Override
	public <AdapterType> AdapterType adaptTo(Class<AdapterType> type) {
		return resp.adaptTo(type);
	}
}


/**
 * Servlet output stream that gobbles up all its data.
 */
class NoBodyOutputStream extends ServletOutputStream {
	private static final String LSTRING_FILE =
			"javax.servlet.http.LocalStrings";
	private static final ResourceBundle lStrings =
			ResourceBundle.getBundle(LSTRING_FILE);

	private int contentLength = 0;

	int getContentLength() {
		return contentLength;
	}

	@Override
	public void write(int b) {
		contentLength++;
	}

	@Override
	public void write(byte[] buf, int offset, int len)
			throws IOException {
		if (len >= 0) {
			contentLength += len;
		} else {
			// XXX
			// isn't this really an IllegalArgumentException?

			String msg = lStrings.getString("err.io.negativelength");
			throw new IOException("negative length");
		}
	}

}
